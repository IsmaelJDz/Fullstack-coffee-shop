import React, { useRef } from "react";
import { useRouter } from "next/router";
import { useObserver } from "../../hooks/useObserver";

import ReactContentLoader from "@/components/skeleton/";
import { Coffee } from "../../ts/coffees";

import styles from "./card.module.scss";

const Card = React.memo(
  (props: Coffee) => {
    const { img, id, name, description } = props;

    const router = useRouter();
    const [show, element] = useObserver();
    const elDescription = useRef<HTMLDivElement>(null);

    const handleMouseOver = () => {
      if (elDescription.current) {
        elDescription.current.setAttribute("style", "display:block;");
      }
    };

    /**
     * handleMouseOver
     * @param {*} none
     * Desc: hide description on card
     */

    const handleMouseOut = () => {
      if (elDescription.current) {
        elDescription.current.setAttribute("style", "display:none;");
      }
    };

    const handleClick = (id: number | string, name: string) => {
      const urlName = name.replace(/ /g, "-");
      const CoffeeId = id;

      router.push({
        pathname: `/coffee/[coffee]/[id]`,
        query: { coffee: `${urlName}`, id: `${CoffeeId}` }
      });
    };

    return (
      <article
        ref={element as any}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        onClick={() => handleClick(id, name)}
        className={styles.Card}
      >
        <span className={styles.title}> {name} </span>
        {show ? (
          <>
            <figure>
              <img
                loading="lazy"
                className={styles.img}
                src={img}
                alt={name}
              />
            </figure>
            <figcaption
              className={styles.hide + " " + styles.desc}
              ref={elDescription}
            >
              {description}
            </figcaption>
          </>
        ) : (
          <ReactContentLoader
            peed={2}
            width={425}
            height={340}
            viewBox="0 0 100 80"
            backgroundColor="#fff"
            foregroundColor="#ddd"
            style={{ width: "100%" }}
          />
        )}
      </article>
    );
  },
  (prevProps, nextProps) => {
    return prevProps.img === nextProps.img;
  }
);

export default Card;
