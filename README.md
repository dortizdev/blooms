
# Simple Bloom Filter

This project employs a very simple bloom filter. It utilizes a simple hash function as well. Would be better to replace it with a more efficient hashing algorithm such as murmurhash.


## Run Locally

Clone the project

```bash
  git clone https://github.com/dortizdev/blooms.git
```

Go to the project directory

```bash
  cd blooms
```

Install dependencies

```bash
  npm install
```


## Running Tests

To run tests, run the following command

```bash
  npm run test
```


## Lessons Learned

Ultimately I learned what bloom filters are and how they are employed. Most importantly I learned about the use of hash function and bit manipulation. I think overall it would be better to emply a murmurhash since it much faster than MD5 and much more efficient that my simple hash function. For certain applications a bloom filter may not be the best choice as it can result in false positives.
## Acknowledgements

 - [Guy Royse](http://guyroyse.com/)
    - Thank you for lending your wisdom, this wouldn't be possible without you
 - [Jason Davies](https://github.com/jasondavies/bloomfilter.js/blob/master/bloomfilter.js)
 - [Code Kata](http://codekata.com/kata/kata05-bloom-filters/)

