#Uninterpreted Data Types

## Bit

The basic unit of information in computing. A bit can only have one of two values generally represented as 0 or 1. The values can be interpreted as logical values (true/false, yes/no), algebraic signs (+/-) or activiation states (on/off).

Information Theory: one bit is typically defined as the uncertainty of a binary random variable that is 0 or 1 with equal probability or the information gined when the value of such a variable becomes known.

Bit-length: the length of a binary number.

## Byte

The byte is a unit of digital information, commonly eight bits. Historically, the byte was the number of bits to encode a single character of text in a computer. THis made it the smallest addressable unit of memory in many computer architectures. 

## Word

Natural unit of data used by a particular processor design. A word is a fixed-sized piece of data handled as a unit by the instruction set or the hardware of the processor. The number of bits in  a word (size, width or length) is an important characteristic of any processor design.

The majority of registers in a processor are usually word sized and the largest piece of data that can be transferred to and from the working memory in a single operation is a word in many architecutres. 

Individual bytes are accessed by shift and mask operations in registers.


    LOAD the word containing the source byte
    SHIFT the source word to align the desired byte to the correct position in the target word
    AND the source word with a mask to zero out all but the desired bits
    LOAD the word containing the target byte
    AND the target word with a mask to zero out the target byte
    OR the registers containing the source and target words to insert the source byte
    STORE the result back in the target location

## Bit array

Array data structure that compactly stores bits. Effective at exploiting bit-level parallelism in hardware to perform operations quickly. A bit array typically stores `kw` bits, `w` is the number of bits in the unit of storage such as a byte or word and `k` is some nonnegative integer. If `w` does not divide the number of bits to be stored, some space is wasted due to internal fragmentation.

[Units of information](https://en.wikipedia.org/wiki/Units_of_information)
[Bit](https://en.wikipedia.org/wiki/Bit)
[Byte](https://en.wikipedia.org/wiki/Byte)
[Word](https://en.wikipedia.org/wiki/Word_(computer_architecture))
[Bit array](https://en.wikipedia.org/wiki/Bit_array)
[Address space](https://en.wikipedia.org/wiki/Address_space)
[Processor register](https://en.wikipedia.org/wiki/Processor_register)
[Working memory](https://en.wikipedia.org/wiki/Computer_memory)
[Fragmentation](https://en.wikipedia.org/wiki/Fragmentation_(computing))