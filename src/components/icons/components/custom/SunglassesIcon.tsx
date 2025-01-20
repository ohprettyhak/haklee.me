import React, { FC } from 'react';

import Icon from '../../icon';
import { IconProps } from '../../types';

export const SunglassesIcon: FC<IconProps> = (props) => (
  <Icon type="fill" {...props}>
    <svg
      width="598"
      height="138"
      viewBox="0 0 598 138"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M69 0H92H115H138H161H177.6C179.84 0 180.96 0 181.816 0.435974C182.569 0.819467 183.181 1.43139 183.564 2.18404C184 3.03968 184 4.15979 184 6.4V16.6C184 18.8402 184 19.9603 184.436 20.816C184.819 21.5686 185.431 22.1805 186.184 22.564C187.04 23 188.16 23 190.4 23H200.6C202.84 23 203.96 23 204.816 23.436C205.569 23.8195 206.181 24.4314 206.564 25.184C207 26.0397 207 27.1598 207 29.4V39.6C207 41.8402 207 42.9603 207.436 43.816C207.819 44.5686 208.431 45.1805 209.184 45.564C210.04 46 211.16 46 213.4 46H230H253H269.6C271.84 46 272.96 46 273.816 45.564C274.569 45.1805 275.181 44.5686 275.564 43.816C276 42.9603 276 41.8402 276 39.6V29.4C276 27.1598 276 26.0397 276.436 25.184C276.819 24.4314 277.431 23.8195 278.184 23.436C279.04 23 280.16 23 282.4 23H292.6C294.84 23 295.96 23 296.816 22.564C297.569 22.1805 298.181 21.5686 298.564 20.816C299 19.9603 299 18.8402 299 16.6V6.4C299 4.15979 299 3.03968 299.436 2.18404C299.819 1.43139 300.431 0.819467 301.184 0.435974C302.04 0 303.16 0 305.4 0H322H345H368H391H414H430.6C432.84 0 433.96 0 434.816 0.435974C435.569 0.819467 436.181 1.43139 436.564 2.18404C437 3.03968 437 4.15979 437 6.4V16.6C437 18.8402 437 19.9603 437.436 20.816C437.819 21.5686 438.431 22.1805 439.184 22.564C440.04 23 441.16 23 443.4 23H453.6C455.84 23 456.96 23 457.816 23.436C458.569 23.8195 459.181 24.4314 459.564 25.184C460 26.0397 460 27.1598 460 29.4V39.6C460 41.8402 460 42.9603 460.436 43.816C460.819 44.5686 461.431 45.1805 462.184 45.564C463.04 46 464.16 46 466.4 46H483H506H529H552H568.6C570.84 46 571.96 46 572.816 46.436C573.569 46.8195 574.181 47.4314 574.564 48.184C575 49.0397 575 50.1598 575 52.4V62.6C575 64.8402 575 65.9603 575.436 66.816C575.819 67.5686 576.431 68.1805 577.184 68.564C578.04 69 579.16 69 581.4 69H591.6C593.84 69 594.96 69 595.816 69.436C596.569 69.8195 597.181 70.4314 597.564 71.184C598 72.0397 598 73.1598 598 75.4V85.6C598 87.8402 598 88.9603 597.564 89.816C597.181 90.5686 596.569 91.1805 595.816 91.564C594.96 92 593.84 92 591.6 92H575H558.4C556.16 92 555.04 92 554.184 91.564C553.431 91.1805 552.819 90.5686 552.436 89.816C552 88.9603 552 87.8402 552 85.6V75.4C552 73.1598 552 72.0397 551.564 71.184C551.181 70.4314 550.569 69.8195 549.816 69.436C548.96 69 547.84 69 545.6 69H529H506H489.4C487.16 69 486.04 69 485.184 69.436C484.431 69.8195 483.819 70.4314 483.436 71.184C483 72.0397 483 73.1598 483 75.4V85.6C483 87.8402 483 88.9603 482.564 89.816C482.181 90.5686 481.569 91.1805 480.816 91.564C479.96 92 478.84 92 476.6 92H466.4C464.16 92 463.04 92 462.184 92.436C461.431 92.8195 460.819 93.4314 460.436 94.184C460 95.0397 460 96.1598 460 98.4V108.6C460 110.84 460 111.96 459.564 112.816C459.181 113.569 458.569 114.181 457.816 114.564C456.96 115 455.84 115 453.6 115H443.4C441.16 115 440.04 115 439.184 115.436C438.431 115.819 437.819 116.431 437.436 117.184C437 118.04 437 119.16 437 121.4V131.6C437 133.84 437 134.96 436.564 135.816C436.181 136.569 435.569 137.181 434.816 137.564C433.96 138 432.84 138 430.6 138H414H391H368H345H322H305.4C303.16 138 302.04 138 301.184 137.564C300.431 137.181 299.819 136.569 299.436 135.816C299 134.96 299 133.84 299 131.6V121.4C299 119.16 299 118.04 298.564 117.184C298.181 116.431 297.569 115.819 296.816 115.436C295.96 115 294.84 115 292.6 115H282.4C280.16 115 279.04 115 278.184 114.564C277.431 114.181 276.819 113.569 276.436 112.816C276 111.96 276 110.84 276 108.6V98.4C276 96.1598 276 95.0397 275.564 94.184C275.181 93.4314 274.569 92.8195 273.816 92.436C272.96 92 271.84 92 269.6 92H259.4C257.16 92 256.04 92 255.184 91.564C254.431 91.1805 253.819 90.5686 253.436 89.816C253 88.9603 253 87.8402 253 85.6V75.4C253 73.1598 253 72.0397 252.564 71.184C252.181 70.4314 251.569 69.8195 250.816 69.436C249.96 69 248.84 69 246.6 69H236.4C234.16 69 233.04 69 232.184 69.436C231.431 69.8195 230.819 70.4314 230.436 71.184C230 72.0397 230 73.1598 230 75.4V85.6C230 87.8402 230 88.9603 229.564 89.816C229.181 90.5686 228.569 91.1805 227.816 91.564C226.96 92 225.84 92 223.6 92H213.4C211.16 92 210.04 92 209.184 92.436C208.431 92.8195 207.819 93.4314 207.436 94.184C207 95.0397 207 96.1598 207 98.4V108.6C207 110.84 207 111.96 206.564 112.816C206.181 113.569 205.569 114.181 204.816 114.564C203.96 115 202.84 115 200.6 115H190.4C188.16 115 187.04 115 186.184 115.436C185.431 115.819 184.819 116.431 184.436 117.184C184 118.04 184 119.16 184 121.4V131.6C184 133.84 184 134.96 183.564 135.816C183.181 136.569 182.569 137.181 181.816 137.564C180.96 138 179.84 138 177.6 138H161H138H115H92H69H52.4C50.1598 138 49.0397 138 48.184 137.564C47.4314 137.181 46.8195 136.569 46.436 135.816C46 134.96 46 133.84 46 131.6V121.4C46 119.16 46 118.04 45.564 117.184C45.1805 116.431 44.5686 115.819 43.816 115.436C42.9603 115 41.8402 115 39.6 115H29.4C27.1598 115 26.0397 115 25.184 114.564C24.4314 114.181 23.8195 113.569 23.436 112.816C23 111.96 23 110.84 23 108.6V98.4C23 96.1598 23 95.0397 22.564 94.184C22.1805 93.4314 21.5686 92.8195 20.816 92.436C19.9603 92 18.8402 92 16.6 92H6.4C4.15979 92 3.03968 92 2.18404 91.564C1.43139 91.1805 0.819467 90.5686 0.435974 89.816C0 88.9603 0 87.8402 0 85.6V69V52.4C0 50.1598 0 49.0397 0.435974 48.184C0.819467 47.4314 1.43139 46.8195 2.18404 46.436C3.03968 46 4.15979 46 6.4 46H16.6C18.8402 46 19.9603 46 20.816 45.564C21.5686 45.1805 22.1805 44.5686 22.564 43.816C23 42.9603 23 41.8402 23 39.6V29.4C23 27.1598 23 26.0397 23.436 25.184C23.8195 24.4314 24.4314 23.8195 25.184 23.436C26.0397 23 27.1598 23 29.4 23H39.6C41.8402 23 42.9603 23 43.816 22.564C44.5686 22.1805 45.1805 21.5686 45.564 20.816C46 19.9603 46 18.8402 46 16.6V6.4C46 4.15979 46 3.03968 46.436 2.18404C46.8195 1.43139 47.4314 0.819467 48.184 0.435974C49.0397 0 50.1598 0 52.4 0H69ZM345 75.4C345 73.1598 345 72.0397 344.564 71.184C344.181 70.4314 343.569 69.8195 342.816 69.436C341.96 69 340.84 69 338.6 69H322H305.4C303.16 69 302.04 69 301.184 69.436C300.431 69.8195 299.819 70.4314 299.436 71.184C299 72.0397 299 73.1598 299 75.4V85.6C299 87.8402 299 88.9603 299.436 89.816C299.819 90.5686 300.431 91.1805 301.184 91.564C302.04 92 303.16 92 305.4 92H315.6C317.84 92 318.96 92 319.816 92.436C320.569 92.8195 321.181 93.4314 321.564 94.184C322 95.0397 322 96.1598 322 98.4V108.6C322 110.84 322 111.96 322.436 112.816C322.819 113.569 323.431 114.181 324.184 114.564C325.04 115 326.16 115 328.4 115H345H361.6C363.84 115 364.96 115 365.816 114.564C366.569 114.181 367.181 113.569 367.564 112.816C368 111.96 368 110.84 368 108.6V98.4C368 96.1598 368 95.0397 367.564 94.184C367.181 93.4314 366.569 92.8195 365.816 92.436C364.96 92 363.84 92 361.6 92H351.4C349.16 92 348.04 92 347.184 91.564C346.431 91.1805 345.819 90.5686 345.436 89.816C345 88.9603 345 87.8402 345 85.6V75.4ZM92 75.4C92 73.1598 92 72.0397 91.564 71.184C91.1805 70.4314 90.5686 69.8195 89.816 69.436C88.9603 69 87.8402 69 85.6 69H69H52.4C50.1598 69 49.0397 69 48.184 69.436C47.4314 69.8195 46.8195 70.4314 46.436 71.184C46 72.0397 46 73.1598 46 75.4V85.6C46 87.8402 46 88.9603 46.436 89.816C46.8195 90.5686 47.4314 91.1805 48.184 91.564C49.0397 92 50.1598 92 52.4 92H62.6C64.8402 92 65.9603 92 66.816 92.436C67.5686 92.8195 68.1805 93.4314 68.564 94.184C69 95.0397 69 96.1598 69 98.4V108.6C69 110.84 69 111.96 69.436 112.816C69.8195 113.569 70.4314 114.181 71.184 114.564C72.0397 115 73.1598 115 75.4 115H92H108.6C110.84 115 111.96 115 112.816 114.564C113.569 114.181 114.181 113.569 114.564 112.816C115 111.96 115 110.84 115 108.6V98.4C115 96.1598 115 95.0397 114.564 94.184C114.181 93.4314 113.569 92.8195 112.816 92.436C111.96 92 110.84 92 108.6 92H98.4C96.1598 92 95.0397 92 94.184 91.564C93.4314 91.1805 92.8195 90.5686 92.436 89.816C92 88.9603 92 87.8402 92 85.6V75.4Z"
        fill={props.fill}
      />
    </svg>
  </Icon>
);

SunglassesIcon.displayName = 'SunglassesIcon';
