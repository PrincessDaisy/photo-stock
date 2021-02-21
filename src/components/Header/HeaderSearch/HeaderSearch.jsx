import { Formik } from "formik";
import { React } from "react";
import { Formik, Field, Form } from "formik";

const HeaderSearch = () => {
    return <Formik initialValues={{
        searchValue: '',
        page: 1
    }} onSubmit={async (value) => {
        console.log(value)
        const response = await PhotosAPI.getPhotosList(value.page, value.searchValue)
        setDataPhoto(response.data.results)
    }} >
        <Form>
            <Field id="searchValue" name="searchValue" placeholder="Поиск" />
            <button type="submit">Поиск</button>
        </Form>
    </Formik>
}

export default HeaderSearch