import calculator from "../src/aula-03/calculator";

describe("Funções Fantásticas", () => {
    it("returns 3 for 2 and 1 params", () => {
        //Chamar a função que queremos testar com os paremetros
	const resultado = calculator.sum(2, 1);
        //Nesse cenário esperamos o resultado 3     
       expect(resultado).toBe(3);
    });
    it("returns 3 for 2 and 1 params", () => {
        //Chamar a função que queremos testar com os paremetros
	const resultado = calculator.sub(1, 2);
        //Nesse cenário esperamos o resultado 3     
       expect(resultado).toBe(-1);
    });
    it("returns 3 for 2 and 1 params", () => {
        //Chamar a função que queremos testar com os paremetros
	const resultado = calculator.mul(1, 2);
        //Nesse cenário esperamos o resultado 3     
       expect(resultado).toBe(2);
    });
    it("returns 3 for 2 and 1 params", () => {
        //Chamar a função que queremos testar com os paremetros
	const resultado = calculator.div(1, 2);
        //Nesse cenário esperamos o resultado 3     
       expect(resultado).toBe(0.5);
    });
});