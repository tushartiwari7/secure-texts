# Ciphers & Encryptions
[Ciphers](https://en.wikipedia.org/wiki/Cipher) are the *basic building blocks of cryptography* — they’re certainly the earliest recorded implementations of encryption.
Infancy crypto-lingo, a cipher is simply a series of steps that scrambles (*encrypts*) the original message, known as **plaintext**,  to a resultant message known as **ciphertext**.

[Encryption](https://en.wikipedia.org/wiki/Encryption) is a term that comes from the science of cryptography. It    includes the coding and decoding of messages in order to protect    their contents.
*The very word cryptography has Greek origins. “Kryptos” means hidden    and “Graphein” – word.*

## Substitution Cipher (*Atbash*)
 - [Atbash Cipher](https://en.wikipedia.org/wiki/Atbash) is a simple monoalphabetic  substitution cipher.
 - In Atbash, the *first letter* of the alphabet is replaced with the last
   letter, the *second letter* is switched with the second to last, & so  
   on; essentially, the alphabet is reversed

![](https://lh3.googleusercontent.com/TzkpbbtqI1UXc7V4xpthpoEUKIGxvl37uKK2di4quAQKMGxabMyCSZ8JpDwwzi8oHb6p8WN_nWU3qqfmXC4S6-9qHa_0diAX6MDOf3MHGrFoYuQgORUO1vYkU1RP-TIjUqJWKfGT)

 - It is a very insecure cipher such that once it’s broken, it’s broken 
   for all messages. 
   
 - There is no required distinction per message, no       key.

##  Caesar Cipher  (*Shift*)

 - [Caesar shift](https://en.wikipedia.org/wiki/Caesar_cipher) is one of the simplest and most widely known encryption
   techniques. 
 - It is a type of substitution cipher in which each letter    in the
   plaintext is replaced by a letter some fixed number of  positions
   down the alphabet.
 - For example, with a shift of +3 (to right) word "B" will become
   "E".

![](https://lh5.googleusercontent.com/XBptfDhtUjiX8KP16SJIxkhCjdWdPd6z2ndSGMUTRocfSTetn6hrmNHRKadOgxQzMqmqqAtH4l6bChMgTjHLZoph9xK9q5JPhjXEfa7pDNT30gk2u9bvXwZ8L5O_lfjni73fgxZy)

 - First we translate all of our characters to numbers, 'a'=0, 'b'=1,
   'c'=2, ... , 'z'=25.
The **encryption** is given by:	 				![](https://lh4.googleusercontent.com/R-Ic-5BCHON4KZypRgAd_RwNlUDPRswPhyc7UelIdfZDteZtsjCGxdBhIoWeaLEGbZx3-Qt0V5OQdi0_mE2VG4_Az3gEGrSSf_y_X0G9OYHXNJC3wLQXk6VgE0tDDPepnPldg0pI)
The **decryption** is the inverse operation:   **![](https://lh4.googleusercontent.com/7E4nSqR0sGUH6oI8OKnKV5bs1fPUpRKyxnZM4mQJudXeVlUYqoNqnSXf9_Oz1T-XhQdt2RrSYb00GfgrILPpbqgj2tDJTFUNUIInbRLL0laVoeKFsl8SoK1uK0xC_PQJYWZjhfvA)**

## Vigenere Ciphers (*Keys & Keystreams*)

 - [Vigenere Cipher](https://en.wikipedia.org/wiki/Vigen%C3%A8re_cipher) was the first cipher to use an encryption system with
   a dynamic (changing) key.
 - This scheme of cipher uses a text string (say, a word) as a key,
   which is then used for doing a number of shifts on the plaintext.
 - For example, let’s assume the key is ‘point’. Each alphabet of the
   key is converted to its respective numeric value: In this case,
*p → 16, o → 15, i → 9, n → 14, and t → 20.*
Thus, the key is: *16 15 9 14 20.*

In the example below, we encrypt the same plaintext message (“This is a cipher”), however, we’ll also assign a key — the word “Testkey”:

![](https://lh3.googleusercontent.com/Wv1detw3C5CQpXPYq4HsUyh8pj7H2sSAnhtL5h2PqNdtWSvXmV1FN6YqaSz_cgCVMo7PljyYNNdKDkUu6Oz15FmtdaMXgHCVa-wd86FKYc7XTTG0yuoYBzpXUvFxoCuJ-gq0BIJw)

## Data Encryption Standard (DES) 
 - Data Encryption Standard [(DES)](https://en.wikipedia.org/wiki/Data_Encryption_Standard) is a very popular encryption standard
   created by the National Security Agency. DES can be easily broken.
 - DES is a *block cipher* algorithm that takes the plain text in blocks
   of 64 bits and converts them to ciphertext using keys of 48 bits.
 - It is a *symmetric key* algorithm, which means that the same key is   
   used for encrypting and decrypting ​data.
 - Thus DES results in a permutation among the *2^64* (read this as: "*2 to
   the 64th power*") possible arrangements of 64 bits, each of which may
   be either 0 or 1.
 - Each block of 64 bits is divided into two blocks of 32 bits each, a
   left half-block L and a right half R. (This division is only used in
   certain operations.)
   
 - Triple DES (3DES) is an enhanced version of DES. 3DES applies DES
   three times, and uses a 168-bit key.

![](https://lh4.googleusercontent.com/t_C2WyRJqr_fr97b89CxU2i-8JFBdT7JulDP3SIjF98Gd8D7nlAcQKx-yrauiPD0opqS02CAqlIcjzhbs2HXIIEptSEho320Hq2YHc9N2d5SVhh-0gPNWn7R26N5ngxNlx6eJ9oK)

## RC4 Encryption Algorithm

 - The [RC4](https://en.wikipedia.org/wiki/RC4) Encryption Algorithm, developed by Ronald Rivest of RSA.
 - RC4 is a stream cipher and variable-length key algorithm. This algorithm encrypts one byte at a time (or larger units at a time).
 - The RC4 encryption algorithm is used by standards such as IEEE 802.11
   within WEP (Wireless Encryption Protocol) using 40 and 128-bit keys.

![](https://lh5.googleusercontent.com/ubyKCogMlu-FnQwkfdQtl9RLsDhP800bY4Vl8WTpzpp6cvMBTfV9XMkIrF47NkMwv2nFCq2-5Ln3pW8c7EHe7gj6YZKwfrPTGzeNlf5MXK1PQ-De7EL_h5d8tnn0gYTDXmpBFpE8)
 - The algorithm is serial as it requires successive exchanges of state
   entries based on the key sequence. Hence implementations can be very
   computationally intensive.
 - A key input is a pseudorandom bit generator that produces a stream
   8-bit number that is unpredictable without knowledge of the input
   key.
 - The output of the generator is called key-stream, which is combined
   one byte at a time with the plaintext stream cipher using X-OR
   operation.

## Advanced Encryption Standard (AES)

 - [AES](https://en.wikipedia.org/wiki/Advanced_Encryption_Standard) is the algorithm trusted as the standard by the U.S. Government and numerous organizations.
 - AES (Advanced Encryption Standard) is an improved version of Triple DES that supports encryption key lengths of up to 256 bits.
 - Although it is extremely efficient in 128-bit form, AES also uses
   keys of 192 and 256 bits for heavy-duty encryption purposes.
 - AES is largely considered impervious to all attacks, except for brute
   force, which attempts to decipher messages using all possible
   combinations in the 128, 192, or 256-bit cipher.
 - Still, security experts believe that AES will eventually be hailed as
   the de facto standard for encrypting data in the private sector.
 - AES encryption is commonly used in a lot of ways, including wireless
   security, processor security, file encryption, and SSL/TLS. 
 - AES is a fast and highly secure form of encryption that is a favorite
   of businesses and governments worldwide.
 - With a 256-bit encryption key, AES is very secure — virtually
   unbreakable. 

![](https://lh3.googleusercontent.com/Lv8e7fHUm8kxBkrMd2S9D4Vesc_ZvprYGuxSBftPNVy6UZ0qfct8VtlQ7hffv8HmmGEl5VaGmErbTS3W9Gbj-Nj9hFLnRQXDsCvTzrLkbdL8IlX8uPBAmtDHYnH4otbO99CApuI-)

### Fun Fact 😉
![](https://lh4.googleusercontent.com/3Xhog2vjc4Gw7-0EPj0sZ5SmdfbOo18fLxf5x6b70iw96gSyB6M7T5M7ib_Kwd1zIRDnXUoetXTYkJQ4PeU00Olu2V7V7RQ3XkVJwAIZy5EfD-vSng58lWveOmLfg5INsUpQu6VZ)


 # Conclusion
 - Everyone, not just government officials and elites, should have equal
   access to secure end-to-end encryption technology.   
 - Public education about encryption is an intrinsic good: The more the public uses  encryption, the greater security and privacy it can enjoy.   
 - Many constituencies depend on encryption: students, journalists, human   
   rights workers, individual inventors and companies.
 
 - A public that can communicate securely and without government
   interference experiences greater freedom of speech, deeper
   dissemination of knowledge, more authentic communication and wider
   communal cooperation.
 - In an increasingly global digital world, encryption protects
   democracy.

