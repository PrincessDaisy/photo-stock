/* eslint-disable react/prop-types */
import { React } from 'react';
import { Formik, Form } from 'formik';
import HeaderInput from './HeaderInput/HeaderInput';

const HeaderSearch = (props) => {
  const { setSearchVal } = props;
  return (
    <div>
      <Formik
        initialValues={{
          searchValue: '',
          page: 1,
        }}
        onSubmit={(value) => {
          setSearchVal(value.searchValue);
        }}
      >
        <Form>
          <HeaderInput id="searchValue" name="searchValue" />
        </Form>
      </Formik>
    </div>
  );
};

export default HeaderSearch;
