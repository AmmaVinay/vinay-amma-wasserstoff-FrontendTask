import React from "react";
import { motion } from "framer-motion";

export default function Events() {
  const collectiblesData = [
    {
      year: 2024,
      author: 'Pablo',
      name: 'Collectible Name',
      imageURL: 'https://s3-alpha-sig.figma.com/img/11ff/a468/17a9a8d438bc26d999399303984cfe8f?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WMekd~2plojizQcmW-Ag28bnEGcLhYrbik9WUpC5tDfhg2-7jtak1W0iNm85pzqeWT1nGPXP44PKELUx2LdeYZeKMd940E3mVMHGQVaTS8tvsCFPncapChUZwn0awybA8qSH~QA90SZHI~Ab6UquoknDICYhjAFrNtQBVVJZ3fuAg0yPC~Y5ZD9m6536hJCy1efvWtO5WIVrj768FkLfmmgGQq6-FO6J-kooDZAlSmC0y9lruFkwO9wjPciTNEiag8130bqjXDs7gQKrMEBJUKrEydDeuqz0OHB4GA1COdk63Z8K3J4agGJ5twjNrpsqM4wg6b6FgBfXYdzgviVXLQ__',
    },
    {
      year: 2024,
      author: 'Pablo',
      name: 'Collectible Name',
      imageURL: 'https://s3-alpha-sig.figma.com/img/11ff/a468/17a9a8d438bc26d999399303984cfe8f?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WMekd~2plojizQcmW-Ag28bnEGcLhYrbik9WUpC5tDfhg2-7jtak1W0iNm85pzqeWT1nGPXP44PKELUx2LdeYZeKMd940E3mVMHGQVaTS8tvsCFPncapChUZwn0awybA8qSH~QA90SZHI~Ab6UquoknDICYhjAFrNtQBVVJZ3fuAg0yPC~Y5ZD9m6536hJCy1efvWtO5WIVrj768FkLfmmgGQq6-FO6J-kooDZAlSmC0y9lruFkwO9wjPciTNEiag8130bqjXDs7gQKrMEBJUKrEydDeuqz0OHB4GA1COdk63Z8K3J4agGJ5twjNrpsqM4wg6b6FgBfXYdzgviVXLQ__',
    },
    {
      year: 2024,
      author: 'Pablo',
      name: 'Collectible Name',
      imageURL: 'https://s3-alpha-sig.figma.com/img/11ff/a468/17a9a8d438bc26d999399303984cfe8f?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WMekd~2plojizQcmW-Ag28bnEGcLhYrbik9WUpC5tDfhg2-7jtak1W0iNm85pzqeWT1nGPXP44PKELUx2LdeYZeKMd940E3mVMHGQVaTS8tvsCFPncapChUZwn0awybA8qSH~QA90SZHI~Ab6UquoknDICYhjAFrNtQBVVJZ3fuAg0yPC~Y5ZD9m6536hJCy1efvWtO5WIVrj768FkLfmmgGQq6-FO6J-kooDZAlSmC0y9lruFkwO9wjPciTNEiag8130bqjXDs7gQKrMEBJUKrEydDeuqz0OHB4GA1COdk63Z8K3J4agGJ5twjNrpsqM4wg6b6FgBfXYdzgviVXLQ__',
    },
    {
      year: 2024,
      author: 'Pablo',
      name: 'Collectible Name',
      imageURL: 'https://s3-alpha-sig.figma.com/img/11ff/a468/17a9a8d438bc26d999399303984cfe8f?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WMekd~2plojizQcmW-Ag28bnEGcLhYrbik9WUpC5tDfhg2-7jtak1W0iNm85pzqeWT1nGPXP44PKELUx2LdeYZeKMd940E3mVMHGQVaTS8tvsCFPncapChUZwn0awybA8qSH~QA90SZHI~Ab6UquoknDICYhjAFrNtQBVVJZ3fuAg0yPC~Y5ZD9m6536hJCy1efvWtO5WIVrj768FkLfmmgGQq6-FO6J-kooDZAlSmC0y9lruFkwO9wjPciTNEiag8130bqjXDs7gQKrMEBJUKrEydDeuqz0OHB4GA1COdk63Z8K3J4agGJ5twjNrpsqM4wg6b6FgBfXYdzgviVXLQ__',
    }, 

  ];

  return (
    <div className="rounded-lg shadow-lg pl-12 pb-10">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="font-bold text-2xl md:text-3xl leading-tight mt-8 mb-8">Explore Your First Collectible</h1>
      </motion.div>
      <div className="w-[316px] h-[302px]">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h1 className="font-extrabold text-3xl w-[200px] leading-none md:text-5xl mb-3">Meta Lives</h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h5 className="text-xl md:text-2xl font-bold mb-2">Live in Astrix</h5>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="text-base md:text-lg leading-relaxed mb-8">
            Lorem ipsum dolor sit amet consectetur. Ac lorem massa in morbi et sed ipsum. Pellentesque mattis condimentum ut nulla.
          </p>
        </motion.div>

        <div className="flex items-center w-[368px] space-x-3">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="flex -space-x-3">
              <img
                className="h-9 w-9 rounded-full"
                src="https://s3-alpha-sig.figma.com/img/4e19/8777/91b3a067100d25b408b983b1f73c7bd3?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=arDb84NbA34jQPHW-RKqPTkY4BpSTTVQkqtUOefFV9-bGqJsPRuE6mOJvd2F7Ei66jdDt86N0t95CJjrhUtjKH9iHutW2OUEXXK3LZOrUfetN1c94RSHu8XfXEdSpzoS~4xTj~iNnTJxqmy8SecPsTX2J0Oqt3tv~dOVVIqRh6fyENPLKd~TC1FoBaeKaFTGIsfT67yBIfOsxBdc2quPGCBqbWJdVuMKMEQ6HNAKJA6Ousen2RlzAX3oEeU0LTfdnCs7txkxeEEyKrnGBgu9-X00p6DBmD5MVAHGPIBcCyHqL1NKcAgCBc~K6C~OtDSmTPkVpzWCwnG7tDee~hy-HQ__"
                alt=""
              />
              <img
                className="h-9 w-9 rounded-full"
                src="https://s3-alpha-sig.figma.com/img/36c6/4db5/7c277ee0fba8cbe9f3689274a18e8d7a?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gGTShYIBJ48RHDlXXqZapx8WoxcyhDAZ-axZsTxhG51n6tPMH3hFGzEsNVMi~o1ocxopD4nsAiPxceJurv9zRaT3fakiV4FKccXTesGWn2~nhIIGnd6MrMM5m0SnTCyGl57chlcsGv6ZRBYSK12-sRGaJoBdgiSbFnZy6QHMT3-8gg4rJLZnCHOsv3kqtXDz6DwsCBHHscA2tEpZabDXBqPv0JjtQGvxA~TAuoO~bHH7W3FkINKr0i52DW-JMFc6CKQDBQF6-P8VTsTfmKNdu3RyLntAP~8a1~HLIQP4x65uGFQ31bXG2LRqBjYvrB7u41OtnRi2To54iY04xsZuVw__"
                alt=""
              />
              <img
                className="h-9 w-9 rounded-full"
                src="https://s3-alpha-sig.figma.com/img/a513/a6cb/eac00ac344058cf2cbecf291000536a2?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YJrXsgqRLQYdHqN6CNCu9iKmB-biujkZvO~6TqzirqKoq4XwoAeFkA-9rzc22CzcLGHDGv2KEzFz~litdZdxhodZ9O6a5XAi77fkt1ITzuMHBsd-0BiuaGzwONavhKBz4ixu5sXlrnGFinfk4B~MYqwrjAE2HaRNgPkILdd~R4FNt5HIeV5ECsmvcXj3IxKW5BcSPAe-RXTXG8BAUdtx6B-P9hz486JiL144uD8xLZxYIxwG~2rtggr1MjDizKIZqxJYdNjFmIcZqnF~HMttTezUcKWLy4~wwgK-CA37egB7kuG8js-M9hzUqzmw6hjkFKTC84YrvDQaYeAR9FlUeA__"
                alt=""
              />
              <img
                className="h-9 w-9 rounded-full"
                src="https://s3-alpha-sig.figma.com/img/a513/a6cb/eac00ac344058cf2cbecf291000536a2?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YJrXsgqRLQYdHqN6CNCu9iKmB-biujkZvO~6TqzirqKoq4XwoAeFkA-9rzc22CzcLGHDGv2KEzFz~litdZdxhodZ9O6a5XAi77fkt1ITzuMHBsd-0BiuaGzwONavhKBz4ixu5sXlrnGFinfk4B~MYqwrjAE2HaRNgPkILdd~R4FNt5HIeV5ECsmvcXj3IxKW5BcSPAe-RXTXG8BAUdtx6B-P9hz486JiL144uD8xLZxYIxwG~2rtggr1MjDizKIZqxJYdNjFmIcZqnF~HMttTezUcKWLy4~wwgK-CA37egB7kuG8js-M9hzUqzmw6hjkFKTC84YrvDQaYeAR9FlUeA__"
                alt=""
              />
              <img
                className="h-10 w-10 rounded-full"
                src="https://s3-alpha-sig.figma.com/img/36c6/4db5/7c277ee0fba8cbe9f3689274a18e8d7a?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gGTShYIBJ48RHDlXXqZapx8WoxcyhDAZ-axZsTxhG51n6tPMH3hFGzEsNVMi~o1ocxopD4nsAiPxceJurv9zRaT3fakiV4FKccXTesGWn2~nhIIGnd6MrMM5m0SnTCyGl57chlcsGv6ZRBYSK12-sRGaJoBdgiSbFnZy6QHMT3-8gg4rJLZnCHOsv3kqtXDz6DwsCBHHscA2tEpZabDXBqPv0JjtQGvxA~TAuoO~bHH7W3FkINKr0i52DW-JMFc6CKQDBQF6-P8VTsTfmKNdu3RyLntAP~8a1~HLIQP4x65uGFQ31bXG2LRqBjYvrB7u41OtnRi2To54iY04xsZuVw__"
                alt=""
              />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <p className="text-[#fffcf7] w-[212px] ml-6 text-base font-medium leading-[1] p-2 rounded-lg">
              22k people interested
            </p>
          </motion.div>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <h1 className="my-8 w-[81px] h-[18px] pt-4 font-lexend text-3xl font-medium leading-[14px]">
          Collectibles
        </h1>
      </motion.div>

      <div className="flex w-[500px] mb-4 gap-[11px] overflow-x-scroll  smooth-scroll">
        {collectiblesData.map((collectible, index) => (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
            key={index}
            className="flex-shrink-0 w-[180px] flex flex-col gap-4 rounded-2xl bg-[#B9A0FF] shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl p-3"
          >
            <div className="flex justify-between items-center">
              <p className="bg-gray-800 text-white text-sm rounded-lg px-2 py-1">
                {collectible.year}
              </p>
              <p className="text-black text-sm">
                by <span className="font-bold">{collectible.author}</span>
              </p>
            </div>
            
            <div className="text-center">
              <h1 className="text-black font-semibold text-base leading-tight mb-2">
                {collectible.name}
              </h1>
              <div className="flex justify-center">
                <img
                  src={collectible.imageURL}
                  className="h-44 w-44 border-2 object-cover rounded-2xl border-black"
                  alt="Collectible Image"
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="flex justify-end">
        <button className="text-black animate-pulse mt-12 mr-10 md:mr-2 w-[154px] font-extrabold text-center bg-[#FFCA5F] rounded-full py-3 px-4">
          Join Waitlist
        </button>
      </div>
      <style jsx>
        {`
          /* CustomScrollbar.css */
          .smooth-scroll {
            scrollbar-width: none;
            -ms-overflow-style: none;
          }

          .smooth-scroll::-webkit-scrollbar {
            display: none;
          }
        `}
      </style>
    </div>
  );
}
