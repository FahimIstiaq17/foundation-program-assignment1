function validateUsername (username) {
        const name = username.toLowerCase();

        if (username.length <4) {
                return "Too short";
        } 
        else if (username.includes (" ")) {
                return "No spaces allowed";
        } 
        else if (name.includes ("admin") ) {
                return "Reserved Word"
        }
        else {
                return "Available";
        }
}

console.log(validateUsername("rahim123"));
console.log(validateUsername("ab"));
console.log(validateUsername("a b"));
console.log(validateUsername("abcd"));
console.log(validateUsername("rahim islam"));
console.log(validateUsername("superadmin99"));
console.log(validateUsername("Admin_Rahim"));

