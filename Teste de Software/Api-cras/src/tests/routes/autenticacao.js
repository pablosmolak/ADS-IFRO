import { describe, expect, it, jest, beforeEach, afterAll, afterEach } from '@jest/globals';
import mongoose from "mongoose";
import app from '../../app';
import request from "supertest";

let server;
let token = false; 
   
describe('Autenticacao', () => {
    
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
    
   
    it('Deve retornar um usuario confirmar usuario valido', async () => {
        
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

    it('Deve retornar erro de usuario senha incorreta', async () => {
        const dados = await request(app)
       .post('/login')
       .send({
        email: "4190451Rynaldo.Carvalho@live.com",
        senha: "1234",
        })
       .expect(400); 
       expect(dados._body.message).toEqual('Senha inválida!')
    });

    it('Deve retornar erro de usuario inativo', async () => {
        const dados = await request(app)
       .post('/login')
       .send({
        email: "55954160Eliete69@bol.com.br",
        senha: "123",
        })
       .expect(400); 
       expect(dados._body.message).toEqual('Usuário inativo!')
    });

    it('Deve retornar erro de usuario invalido', async () => {
        const dados = await request(app)
       .post('/login')
       .send({
        email: "invalido",
        senha: "invalido",
        })
       .expect(400); 
       expect(dados._body.message).toEqual('Usuário ou senha inválida!')
    });


       
  });
