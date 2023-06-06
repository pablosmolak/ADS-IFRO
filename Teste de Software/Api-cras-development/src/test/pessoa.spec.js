import {describe,expect,it,jest} from "@jest/globals";
import PessoaController from "../controllers/PessoaController";
import pessoas from "../models/Pessoa";

describe("Deve retornar os testes Unitario de Pessoa", () => {
    const dataPessoa = new Date()
    const objPessoa ={
        nome: "Pablo Smolak",
        cpf: "2536254258",
        nit: "25654",
        dataNascimento: dataPessoa,
        estrangeiro: false,
        pais: "Brasil",
        cep: "2584522",
        logradouro: "casa das prima",
        numero: "12",
        bairro: "serelepe",
        cidade: "maconha loca",
        estado: "chapadinha",
        telefone: "6666666666",
        telefoneContato: "5555555555"
    }

    it("Deve retornar uma instância de Pessoa", () => {
        const pessoa = new pessoas(objPessoa);
        expect(pessoa).toEqual(expect.objectContaining(objPessoa))
    })

    it("deve retornar um cadastro simulado com mock", () =>
    {
        const pessoa = new pessoas(objPessoa)
        PessoaController.cadastrarPessoa = jest.fn().mockReturnValue({
        nome: "Pablo Smolak",
        cpf: "2536254258",
        nit: "25654",
        dataNascimento: dataPessoa,
        estrangeiro: false,
        pais: "Brasil",
        cep: "2584522",
        logradouro: "casa das prima",
        numero: "12",
        bairro: "serelepe",
        cidade: "maconha loca",
        estado: "chapadinha",
        telefone: "6666666666",
        telefoneContato: "5555555555"
        })

        const retorno = PessoaController.cadastrarPessoa()
        expect(retorno.nome).toEqual("Pablo Smolak")
        expect(retorno).toHaveProperty("nome", "Pablo Smolak")
        expect(retorno).toEqual(expect.objectContaining({dataNascimento: expect.any(Date),...objPessoa}))

    })

    it("deve retornar um usuario quando informado seu id", () => {
        PessoaController.listarPessoaPorId = jest.fn().mockReturnValue({
            _id: "11",
            nome: "Pablo Smolak",
            cpf: "2536254258",
            nit: "25654",
            dataNascimento: dataPessoa,
            estrangeiro: false,
            pais: "Brasil",
            cep: "2584522",
            logradouro: "casa das prima",
            numero: "12",
            bairro: "serelepe",
            cidade: "maconha loca",
            estado: "chapadinha",
            telefone: "6666666666",
            telefoneContato: "5555555555"   
        })
        const retorno = PessoaController.listarPessoaPorId()
        expect(retorno.nome).toEqual("Pablo Smolak")
        expect(PessoaController.listarPessoaPorId).toBeCalledTimes(1);



    })

    it("deve retornar os usuarios", ()=> {
        PessoaController.listarPessoas = jest.fn().mockReturnValue(
            [{
                _id: "11",
                nome: "Pablo Smolak da loucura",
                cpf: "2536254258",
                nit: "25654",
                dataNascimento: dataPessoa,
                estrangeiro: false,
                pais: "Brasil",
                cep: "2584522",
                logradouro: "casa das prima",
                numero: "12",
                bairro: "serelepe",
                cidade: "maconha loca",
                estado: "chapadinha",
                telefone: "6666666666",
                telefoneContato: "5555555555"  
            
            },

            {
                _id: "10",
                nome: "Pablo Smolak",
                cpf: "2536254258",
                nit: "25654",
                dataNascimento: dataPessoa,
                estrangeiro: false,
                pais: "Brasil",
                cep: "2584522",
                logradouro: "casa das prima",
                numero: "12",
                bairro: "serelepe",
                cidade: "maconha loca",
                estado: "chapadinha",
                telefone: "6666666666",
                telefoneContato: "5555555555"  
        
            }
        ])
        const retorno = PessoaController.listarPessoas()
        expect(retorno[0]).toHaveProperty("nome", "Pablo Smolak da loucura")
        expect(retorno).toHaveLength(2);
    })
})