import request from "supertest"

it('Deve retornar as informações do cadastro, quando buscar uma pessoa existente', async () => {
 
    const resposta = await request(`https://swapi.py4e.com/api/`).get(`/people/1/`);
    expect(resposta.status).toBe(200);
    expect(resposta.body.films).toBeDefined();
    expect(resposta.body.vehicles.length).toBeGreaterThan(0);
    expect(resposta.body.name).toBe('Luke Skywalker');

    /*
    console.log(resposta.status);
    console.log(resposta.body);*/

});

it('Deve retornar mensagem de erro, quando buscar uma pessoa inesistente', async () => {
    const resposta = await request(`https://swapi.py4e.com/api/`).get(`/people/9999/`);
    expect(resposta.status).toBe(404);
    expect(resposta.body).toMatchObject({
        detail:'Not found'
    });  

});

