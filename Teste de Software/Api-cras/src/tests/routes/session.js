import { describe, expect, it, jest, beforeEach, afterAll, afterEach } from '@jest/globals';
import mongoose from "mongoose";
import app from '../../app';
import request from "supertest";

let server;
let token = false; 
   
describe('Sessão', () => {
    
    beforeEach(() => {
        const port = 3000;
        server =  app.listen(port);
    } );

    afterEach(() => {
        server.close();
      });
    
    afterAll(() => {
        mongoose.connection.close();
        server.close();
      });
    
   
    it('Deve acessar /login com sucesso', async () => {    
        const dados = await request(app)
       .post('/login')
       .send({
        email: "4190451Rynaldo.Carvalho@live.com",
        senha: "123",
        })
       .set('Accept', 'application/json')
       .expect(200); 
       expect(dados._body.user.email).toEqual('4190451Rynaldo.Carvalho@live.com')
       token = dados._body.token;
    });

    it('Deve acessar /pessoas com sucesso', async ()=> {
        const retorno = await request(app)
       .get('/pessoas')
       .set('Authorization', `Bearer ${token}`)
       .set('Accept', 'application/json') 
       .expect(200);              
        expect(retorno._body.docs[0].nome).toContain('Tarsila Reis')
        
    });       
    it('Deve acessar /usuarios com sucesso', async ()=> {
        const retorno = await request(app)
       .get('/usuarios')
       .set('Authorization', `Bearer ${token}`)
       .set('Accept', 'application/json') 
       .expect(200);              
        expect(retorno._body.docs[0].nome).toContain('Irismar Nogueira')
        
    });
    it('Deve acessar /atendimentos com sucesso', async ()=> {
        const retorno = await request(app)
       .get('/atendimentos')
       .set('Authorization', `Bearer ${token}`)
       .set('Accept', 'application/json') 
       .expect(200);              
        expect(retorno._body.docs[0].nome).toContain('Srta. Eddy Melo')
        
    });         
      
      

describe ('Nome da organização do teste', () => {
    it('Nome do teste - usualmente começa com deve retornar', () => {
    expect( 1 +1 ).toBe(2)
    });
});    


});