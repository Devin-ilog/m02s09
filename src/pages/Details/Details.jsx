import { useParams } from "react-router-dom";
import "./Details.css";

function DetailsPage() {
  const params = useParams();
  const { batata } = params;

  console.log(params);

  return (
    <main className="DetailsPageContainer">
      <h2>Detalhes</h2>
      <p>Informações sobre {batata}</p>
    </main>
  );
}

export default DetailsPage;
