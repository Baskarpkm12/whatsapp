
function Footer({addUser}){
    return(
        <>
        <div className="addUser" onClick={addUser}><h1>+</h1></div>
        <footer>
        <h5>end-to-end-encrypted</h5>
        </footer>
        </>    )
}
export default Footer;