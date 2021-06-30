import React from "react";
import { useForm } from "react-hook-form";

export default function Ambulante() {
  const { register, handleSubmit, watch, errors } = useForm();

  //METODO QUE SERA CHAMADO QUANDO SUBMETER O  FORMULÁRIO
  const onSubmit = data=>{
    const usuario = { id: 1 }
    const dataAlterada = { ...data, usuario }
    console.log(dataAlterada)
  }

  return (
    <div className="container">
      <h4>Novo registro ambulante</h4>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="inputEmail4">Nome</label>
            <input type="text" class="form-control"  name="nome"  ref={register}/>
          </div>
          <div class="form-group col-md-6">
            <label for="inputPassword4">Alcunha</label>
            <input type="text" class="form-control" name="alcunha"  ref={register}/>
          </div>
        </div>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="inputEmail4">Cpf</label>
            <input type="text" class="form-control" name="cpf" ref={register} />
          </div>
          <div class="form-group col-md-6">
            <label for="inputPassword4">Rg</label>
            <input type="Text" class="form-control" name="rg" ref={register}/>
          </div>
        </div>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="inputEmail4">Cidade</label>
            <input type="text" class="form-control" name="cidade" ref={register} />
          </div>
          <div class="form-group col-md-6">
            <label for="inputPassword4">Bairro</label>
            <input type="Text" class="form-control" name="bairro" ref={register} />
          </div>
        </div>
        <div class="form-row">
          <div class="form-group col-md-10">
            <label for="inputAddress2">Endereço</label>
            <input type="text" class="form-control" name="endereco" ref={register} />
          </div>

          <div class="form-group col-md-2">
            <label for="inputPassword4">Num</label>
            <input type="Text" class="form-control" name="num" ref={register} />
          </div>
        </div>

        <div class="form-row">

          <div class="form-group col-md-6">
            <label for="inputCity">Genitora</label>
            <input type="text" class="form-control" name="genitora" ref={register} />
          </div>

          <div class="form-group col-md-3">
            <label for="inputState">Regional</label>
            <select name="regional" class="form-control" ref={register}>
              <option selected>Choose...</option>
              <option>Centro-Sul</option>
              <option>Pampulha</option>
              <option>Norte</option>
              <option>Barreiro</option>
              <option>Venda Nova</option>
              <option>Noroeste</option>
            </select>
          </div>

          <div class="form-group col-md-2 ">
            <div class="form-check form-check-inline">
              <input class="form-check-input"
                type="checkbox" name="masculino" ref={register}/>
              <label class="form-check-label" for="masculino">
                M
              </label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input" type="checkbox" name="femenino" ref={register}/>
              <label class="form-check-label" for="inlineCheckbox2">
                F
              </label>
            </div>
          </div>
        </div>
        <div class="form-row">
          <div class="form-group cpl-md-4">
            <div class="form-check">
            <input
                class="form-check-input" type="checkbox" name="p" ref={register}/>
              <label class="form-check-label" for="gridCheck">
                Prontuaiado?
              </label>
            </div>

          </div>

          <div class="form-group col-md-3">
            <label for="inputPassword4">Artigo</label>
            <input type="Text" class="form-control" name="artigo" ref={register}/>
          </div>

        </div>
        <button type="submit" class="btn btn-primary">
          Salvar
        </button>
      </form>
    </div>
  );
}
