import { useState } from "react";

import styles from "./Form.module.css";

const Form = () => {
    const [weight, setWeight] = useState("");
    const [height, setHeight] = useState("");
    const [imc, setImc] = useState(null);
    const [category, setCategory] = useState("");

    const calculateImc = (h, w) => {
        return (w / (h * h))*10000;
    };

    const handleCalculate = (e) => {
        e.preventDefault();
        if (height && weight) {
            const imcValue = calculateImc(
                parseFloat(height),
                parseFloat(weight)
            );
            setImc(imcValue);
            setCategory(handleCategory(imcValue));
        }
    };

    const handleCategory = (imcValue) => {
        let categoryIndex;
        if (imcValue < 18.5) categoryIndex = 0;
        else if (imcValue < 25) categoryIndex = 1;
        else if (imcValue < 30) categoryIndex = 2;
        else if (imcValue < 35) categoryIndex = 3;
        else if (imcValue < 40) categoryIndex = 4;
        else categoryIndex = 5;

        switch (categoryIndex) {
            case 0: return "Abaixo do peso";
            case 1: return "Peso normal";
            case 2: return "Sobrepeso";
            case 3: return "Obesidade grau 1";
            case 4: return "Obesidade grau 2";
            case 5: return "Obesidade grau 3";
        }
    }

    return (
        <form className={styles.form} onSubmit={handleCalculate}>
            <div>
                <p className={styles.title}>Altura (cm)</p>
                <input
                className={styles.input}
                type="number"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                />
            </div>
            <div>
                <p className={styles.title}>Peso (kg)</p>
                <input
                className={styles.input}
                type="number" 
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                />
            </div>
            <button className={styles.button}>Calcular</button>
            {imc && (
                <div className={styles.result}>
                    <p>Seu IMC é {imc.toFixed(2)}</p>
                    <p>{category}</p>
                </div>
            )}
        </form>
    );
};

export default Form;
