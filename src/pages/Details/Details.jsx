import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./Details.css";

function DetailsPage() {
  const params = useParams();
  const { cep } = params;
  const [cepInfos, setCepInfos] = useState();

  useEffect(() => {
    if (cep) {
      axios.get(`https://viacep.com.br/ws/${cep}/json/`).then((response) => {
        // atualiza estado de informações
        setCepInfos(response.data);
      });
    }
  }, [cep]);

  return (
    <main className="DetailsPageContainer">
      <h2>Detalhes</h2>
      <p>Informações sobre o CEP {cep}</p>
      <p>Localidade: {cepInfos?.localidade}</p>
      <p>Logradouro: {cepInfos?.logradouro}</p>
    </main>
  );
}

export default DetailsPage;
