function generateRandomPassword(length) {
    const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const specialCharacters = '!@#$%^&*()-_=+[]{}|;:,.<>?';

    const allCharacters = uppercaseLetters + lowercaseLetters + numbers + specialCharacters;
    let password = '';

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allCharacters.length);
        password += allCharacters.charAt(randomIndex); 
    }

    return password;
}

const password = generateRandomPassword(20);
console.log(password);