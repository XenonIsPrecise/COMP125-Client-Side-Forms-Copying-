function copying()
{
    let fn = document.getElementById(firstname)
    document.write(fn)
}


function validateForm()
{

    
    // variables
                let a = document.getElementById("firstname").value;
                let c = document.getElementById("address").value
                let i = document.getElementById("email").value
                let g = document.getElementById("password").value
                let h = document.getElementById("c_password").value
                let e = document.getElementById("postal_code").value;
                
                
    try {
        
        if ((a === '') || (a === null)) {
            throw new Error('First name must be filled out');
        }
        if ((c === '') || (c === null)) {
            throw new Error('Address must be filled out');
        }
        
        if ((i === '') || (i === null)) {
            throw new Error('Email must be filled out');
        }
        
        if ((g === '') || (g === null)) {
            throw new Error('Password must be filled out');
        }
        // check if the number of characters of Password is at least 6
        if (g.length < 6) {
            throw new Error('Passwords must have at least 6 characters');
        }
        
        if ((h === '') || (h === null)) {
            throw new Error('Confirm must be filled out');
        }  

        if(h !== g)
        {
            throw new Error('Passwords donot match!')
        }

        
        if ((e === '') || (e === null)) {
            throw new Error('Postal Code must be filled out');
        }
        
        
        alert("Thank you! The data you entered is accepted. Please go ahead and submit the form.");
        return true;
    } 
    catch (formError) {
        
        alert(formError.message);
        return false;
    } 
} 
