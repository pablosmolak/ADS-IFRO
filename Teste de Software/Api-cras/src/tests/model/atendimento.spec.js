import { describe, expect, it, jest,} from '@jest/globals';
import Atendimentos from '../../models/Atendimento.js';
import mongoose from "mongoose";

describe ( 'Deve retornar os testes de unidade de Atendimento', () => {
    afterEach(() => jest.clearAllMocks());
        const oid = mongoose.Schema.Types.ObjectId.get();
        const objetoAtendimento ={
        oid_pessoa: oid,
        nome: 'Wesley Ramos',
        cpf: '75662256',
        nit: '5215321',
        tipo: 'Auxilio Alimentação',
        observacao: 'dkfjsdkfjkd',
        dataAtendimento: new Date(), 
    };

    it('Deve Instancia uma novo Atendimento', () => {
        const atendimentos = new Atendimentos(objetoAtendimento);
        expect(atendimentos).toEqual(expect.objectContaining(objetoAtendimento));
        expect(atendimentos).toHaveProperty('nome', 'Wesley Ramos');  
    });


});
