import { faTrash, faSignOutAlt, faEdit, faSpinner, faPlusCircle, faLocationArrow } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";


const Icons = () => {
return library.add(faTrash, faSignOutAlt, faEdit, faSpinner, faPlusCircle, faLocationArrow);
};
export default Icons;