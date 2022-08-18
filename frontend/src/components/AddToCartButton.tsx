const AddToCartButton = ({ buttonText }: { buttonText: string }) => {
    return (
        <button type="button" className="btn btn-primary btn-lg">{buttonText}</button>
    );
}

export default AddToCartButton;