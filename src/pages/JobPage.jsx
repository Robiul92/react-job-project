
import Spinner from "../components/Spinner";
import { useParams } from "react-router-dom";

const JobPage = () => {
  const { id } = useParams();

  
 
  return  <h1>{job.title}</h1>;
};

export default JobPage;
