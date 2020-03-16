import { css } from "emotion";

// sp = 480
// tab = 768
// pc = 980
// lg = 1200

export const breakpoints = [480, 768, 980, 1200]
export const mq = breakpoints.map(
  bp => `@media (min-width: ${bp}px)`
)

//utility
export function square(val , key) {
  return {
    width: val,
    height: key,
  };
}

export const baseStyle = css `
  display: flex;
  border-bottom: 1px solid red;
`;

export const utilityStyles = css `
	.u-fz-10 {
    font-size: 1rem !important;
  }

  .u-fz-12 {
    font-size: 1.2rem !important;
  }

  .u-fz-14 {
    font-size: 1.4rem !important;
  }

  .u-fz-16 {
    font-size: 1.6rem !important;
  }

  .u-fz-18 {
    font-size: 1.8rem !important;
  }
`

// export const box = css `
// 	position: relative;
// 	display: inline-block;
// 	border: 2px solid ${brand};
// 	line-height: 1;
// 	padding: 4px;
// 	border-radius: 4px;
// 	position: relative;

// 	&::before{
//     content: '';
//     background: red;
//     width: 20px;
//     height: 1px;
//     display: block;
//     position: absolute;
//     top: 200px;
// 	}

// 	${mq[2]}{
// 		background: red;
// 	}

// 	${mq[3]} {
// 		background: blue;
// 	}
// `;
