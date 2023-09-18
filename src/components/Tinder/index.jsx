import Advanced from "./advanced";
import InputCom from "../Helpers/InputCom";
import PageTitle from "../Helpers/PageTitle";
import Layout from "../Partials/Layout";
import Simple from "./Simple";
import './tinder.css'


export default function Tinder() {
    return (
        <Layout childrenClasses="pt-0 pb-0">
            <div>
                <Advanced />
            </div>
        </Layout>
    );
}
