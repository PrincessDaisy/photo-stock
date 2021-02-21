import { React } from "react";
import { Formik, Field, Form } from "formik";
import HeaderInput from "./HeaderInput/HeaderInput";

const HeaderSearch = (props) => {
    return <div>
        <Formik initialValues={{
            searchValue: '',
            page: 1
        }} onSubmit={(value) => {
            console.log(value)
            props.searchFunction(value.searchValue)
        }} >
            <Form>
                <HeaderInput id="searchValue" name="searchValue" />
            </Form>
        </Formik>
    </div>
}

export default HeaderSearch