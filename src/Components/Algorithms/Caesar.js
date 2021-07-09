export default function getCaesarCypher(str,key,isDecode) {
    str = str.toUpperCase();
    return str.replace(/[A-Z]/g, convert);
  
    function convert(correspondance) {
      const charCode = correspondance.charCodeAt();
      console.log(correspondance,charCode);
      //A = 65, Z = 90
      if(isDecode) {
        return String.fromCharCode(
          ((charCode - key) >= 65) ? charCode - key : (charCode - key) % 65 + 25 );
      }      

      return String.fromCharCode(
              ((charCode + key) <= 90) ? charCode + key : (charCode + key) % 90 + 64 );
      
    }
  }
  