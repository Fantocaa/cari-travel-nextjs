import React from "react";

const ProductPage = ({ params }: { params: { id: string } }) => {
  return <div className="pt-16 text-slate-900">ProductPage : {params.id}</div>;
};

export default ProductPage;
