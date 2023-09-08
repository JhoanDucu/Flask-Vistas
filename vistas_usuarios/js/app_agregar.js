document.forms[0].onsubmit = async(e) => {
    e.preventDefault();
    const params = new URLSearchParams([...new FormData(e.target).entries()]);
    // fetch("/path/to/server", {method:"POST", body:params})
    const response = await new Response(params).text();
    console.log(response);
}