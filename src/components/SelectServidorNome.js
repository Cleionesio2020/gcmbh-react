import React, { useState } from "react";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import Api from "../services/api";

function SelectServidorNome({ selecionaValor }) {
  let items = [];

  const carregaDados = (valor) => {
    Api.get(`/busca_servidor?param=${valor}`).then((response) => {
      response.data.map((item) => {
        if (item.bm) {
          const novo = { id: item.bm, name: item.nomeCompleto };
          items.push(novo);
        }
      });
    });
  };

  const handleOnSearch = (string, results) => {
    // onSearch will have as the first callback parameter
    // the string searched and for the second the results.

    carregaDados(string);
  };

  const handleOnSelect = (item) => {
    selecionaValor(item);
  };

  const handleOnFocus = () => {
    //console.log("Focused");
  };

  return (
    <div>
      <header>
        <div>
          <ReactSearchAutocomplete
            items={items}
            onSearch={handleOnSearch}
            onSelect={handleOnSelect}
            onFocus={handleOnFocus}
            autoFocus
            showIcon={true}
            styling={{
              height: "34px",
              borderRadius: "4px",
              backgroundColor: "white",
              boxShadow: "none",
              hoverBackgroundColor: "#ccc",
              width: "35px",
              zIndex: "1"
            }}
          />
        </div>
      </header>
    </div>
  );
}

export default SelectServidorNome;
