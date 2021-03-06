function getFrequency(string) {
    const str = string.toUpperCase();
    var freq = [];

    for (var i = 0; i < str.length; i++) {
        var character = str.charAt(i);
        if (freq[character]) {
            freq[character]++;
        } else {
            freq[character] = 1;
        }
    }

    return freq;
};

getFrequency('Chinmay Kulkarni');
// getFrequency('Amolya Sharma');