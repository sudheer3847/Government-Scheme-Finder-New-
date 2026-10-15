// Example schemes database structure (update your existing schemes array to match this format if needed)
const schemes = [
    {
        name: "Sample Welfare Scheme",
        category: "student",
        minAge: 18,
        maxAge: 35,
        maxIncome: 300000,
        gender: "all",
        state: "all",
        areaType: "all",
        socialCategory: "all",
        occupation: "all",
        economicBracket: "all",
        disability: false,
        maritalStatus: "all",
        description: "A sample description for testing your 11-parameter filter.",
        link: "#"
    }
    // Add your other schemes here...
];

document.getElementById('schemeForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // 1. Capture all 11 input values safely
    const age = parseInt(document.getElementById('age').value) || 0;
    const income = parseFloat(document.getElementById('income').value) || 0;
    const category = document.getElementById('category').value;
    const gender = document.getElementById('gender').value;
    const state = document.getElementById('state').value;
    const areaType = document.getElementById('areaType').value;
    const socialCategory = document.getElementById('socialCategory').value;
    const occupation = document.getElementById('occupation').value;
    const economicBracket = document.getElementById('economicBracket').value;
    const disability = document.getElementById('disability').value;
    const maritalStatus = document.getElementById('maritalStatus').value;

    // 2. Comprehensive filtering logic across all 11 parameters
    const matchedSchemes = schemes.filter(scheme => {
        const matchesAge = age >= scheme.minAge && age <= scheme.maxAge;
        const matchesIncome = income <= scheme.maxIncome;
        const matchesCategory = (category === 'all' || scheme.category === category || scheme.category === 'all');
        
        // Additional filters (defaults to true if the scheme doesn't explicitly restrict them)
        const matchesGender = (gender === 'all' || !scheme.gender || scheme.gender === gender);
        const matchesState = (state === 'all' || !scheme.state || scheme.state === state);
        const matchesArea = (areaType === 'all' || !scheme.areaType || scheme.areaType === areaType);
        const matchesSocial = (socialCategory === 'all' || !scheme.socialCategory || scheme.socialCategory === socialCategory);
        const matchesOccupation = (occupation === 'all' || !scheme.occupation || scheme.occupation === occupation);
        const matchesBracket = (economicBracket === 'all' || !scheme.economicBracket || scheme.economicBracket === economicBracket);
        const matchesDisability = (disability === 'no' || scheme.disability === true);
        const matchesMarital = (maritalStatus === 'all' || !scheme.maritalStatus || scheme.maritalStatus === maritalStatus);
        
        return matchesAge && matchesIncome && matchesCategory && matchesGender && 
               matchesState && matchesArea && matchesSocial && matchesOccupation && 
               matchesBracket && matchesDisability && matchesMarital;
    });

    // 3. Output results (make sure you have a results container in your HTML)
    console.log("Matched Schemes: ", matchedSchemes);
    // Add your UI rendering logic here to display matchedSchemes to the user
});
