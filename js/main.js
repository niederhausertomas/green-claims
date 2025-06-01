let yesCount = 0;
let answerCount = 0;
let chartColor = "#2c95e9";
let formSubmitted = false;
let currentQuestion = 1;

const questions = [
    {
        number: "01",
        text: "Is your environmental claim based on recognized scientific research?",
        svg: `<svg xmlns="http://www.w3.org/2000/svg" width="306" height="320" viewBox="0 0 306 320" fill="none">
        <path d="M141.185 0.348622C285.742 -8.73311 362.227 161.74 257.251 264.197C255.952 265.466 252.731 267.223 252.395 269.03L258.52 307.625C259.77 315.498 251.757 321.596 244.502 318.295L200.551 298.297C194.405 299.049 188.35 301.073 182.158 302.104L179.675 302.498C75.5518 318.199 -14.3212 233.451 1.90424 128.509L2.31136 126.006C13.6539 59.3767 71.6072 5.50589 139.578 0.458401L141.185 0.348622ZM246.78 252.825C340.672 160.709 272.807 8.79368 143.676 15.6861L142.152 15.7753C81.26 19.5976 28.6135 67.6175 17.7805 127.193L17.5324 128.602C1.23217 224.369 83.4002 302.805 179.625 286.857L180.539 286.695C182.68 286.297 184.897 285.751 187.792 285.061C190.851 284.331 194.655 283.446 198.68 282.954L199.209 282.898C201.854 282.667 204.517 283.123 206.94 284.225L241.679 300.032L237.145 271.455C236.868 269.712 236.892 267.934 237.215 266.199L237.378 265.425C238.263 261.64 240.214 259.025 241.309 257.726C242.586 256.21 243.913 255.079 244.709 254.43C245.496 253.788 246.395 253.121 246.672 252.91C246.713 252.879 246.748 252.85 246.78 252.825Z" fill="white"/>
        </svg>`,
        color: "#AD614F"
    },
    {
        number: "02",
        text: "Have you assessed the impacts using a life-cycle perspective?",
        svg: `<svg xmlns="http://www.w3.org/2000/svg" width="137" height="162" viewBox="0 0 137 162" fill="none">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M3.42549 158.341C1.45658 156.372 0.527344 153.734 0.527344 151.008C0.527344 77.6678 52.8211 14.5884 124.432 0.379737C129.277 -0.585304 135.503 2.20507 136.608 8.5701C137.533 13.4091 134.733 19.5882 128.386 20.6789C66.2157 32.3898 20.9902 87.6979 20.9902 151.008C20.9902 153.734 20.061 156.372 18.0921 158.341C16.1232 160.31 13.4847 161.239 10.7588 161.239C8.0329 161.239 5.39439 160.31 3.42549 158.341ZM127.555 16.0303C130.86 15.4793 132.513 12.1738 131.962 9.41912C131.411 6.11355 128.106 4.46076 125.351 5.01169C55.9345 18.7849 5.24955 79.938 5.24955 151.008C5.24955 154.313 7.45324 156.517 10.7588 156.517C14.0643 156.517 16.268 154.313 16.268 151.008C16.268 85.4473 63.0965 28.1507 127.555 16.0303Z" fill="white"/>
        </svg>`,
        color:"#8A978F"
    },
    {
        number: "03",
        text: "Have you indicated whether the claim applies to the whole product or just part of it?",
        svg:`
        <svg xmlns="http://www.w3.org/2000/svg" width="308" height="264" viewBox="0 0 308 264" fill="none">
        <path d="M297.784 30.3061L214.902 0.355665C213.735 2.39444e-06 212.959 0 212.18 0H95.4441C94.6651 0 93.4979 2.39444e-06 92.7189 0.355665L9.83681 30.3061C2.44287 32.8032 -1.44622 40.2898 0.497288 47.0644L16.0606 101.262C18.0068 107.679 23.8423 111.96 31.2362 111.96C32.7915 111.96 34.7377 111.604 36.2956 111.246L53.8052 105.898L64.3121 253.871C64.7002 259.576 69.7596 263.855 75.9863 263.855H231.634C237.86 263.855 242.917 259.577 243.308 253.871L254.203 105.898L271.713 111.246C273.268 111.601 274.826 111.96 276.772 111.96C283.775 111.96 290.001 107.682 291.948 101.262L307.511 47.0644C309.069 40.2891 304.789 32.8033 297.783 30.3061H297.784ZM203.618 14.2615C199.725 36.3676 179.102 53.4844 153.81 53.4844C128.518 53.4844 107.896 36.3701 104.003 14.2615H203.618ZM276.383 97.6966L254.201 90.9213C253.034 90.5657 251.867 90.2075 250.7 90.2075C244.474 90.2075 239.417 94.4855 239.026 100.191L228.133 249.59H79.4902L68.5949 100.548C68.2067 94.8422 63.1474 90.564 56.9207 90.564C55.7535 90.564 54.5864 90.9197 53.4192 91.2779L31.2381 98.0531L15.6748 43.8554L88.829 17.4693C93.8883 45.9922 121.126 67.7423 153.812 67.7423C186.498 67.7423 213.734 45.9922 218.794 17.1108L291.949 43.4969L276.383 97.6966Z" fill="white"/>
        </svg>
        `,
        color:"#BE8F1F"
    },
    {
        number: "04",
        text: "Are you using accurate, primary, or secondary data to support your claims?",
        svg:`
        <svg xmlns="http://www.w3.org/2000/svg" width="344" height="221" viewBox="0 0 344 221" fill="none">
        <path d="M171.556 8.31445C215.375 8.31445 256.649 29.691 287.285 54.0996C302.54 66.2533 314.912 78.9684 323.398 89.7461C327.648 95.1431 330.831 99.9376 332.912 103.833C335.147 108.016 335.612 110.254 335.612 110.84C335.612 111.426 335.147 113.664 332.912 117.847C330.831 121.742 327.648 126.537 323.398 131.934C314.912 142.711 302.54 155.425 287.285 167.579C256.649 191.988 215.376 213.365 171.556 213.365C127.736 213.365 86.4623 191.988 55.8262 167.579C40.572 155.426 28.2007 142.711 19.7139 131.934C15.464 126.537 12.2802 121.742 10.1992 117.847C7.96467 113.664 7.50008 111.426 7.5 110.84C7.5 110.254 7.96459 108.016 10.1992 103.833C12.2802 99.9376 15.464 95.1431 19.7139 89.7461C28.2007 78.9684 40.5717 66.2533 55.8262 54.0996C86.4623 29.6909 127.736 8.31455 171.556 8.31445Z" stroke="white" stroke-width="15" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>`,
        color:"#65758C"
    },
    {
        number: "05",
        text: "Do you mention the impact indicator being referenced in your claim?",
        svg:`<svg xmlns="http://www.w3.org/2000/svg" width="298" height="298" viewBox="0 0 298 298" fill="none">
        <path d="M284.253 37.2361L260.75 13.7345C252.47 5.50633 240.778 1.66654 229.24 3.41502L174.279 11.8831C168.193 12.7917 162.553 15.6544 158.216 20.0085L10.5088 167.721C0.497075 177.749 0.497075 193.982 10.5088 204.01L93.9968 287.492C104.026 297.503 120.26 297.503 130.289 287.492L277.996 139.779C282.35 135.425 285.196 129.82 286.122 123.735L294.591 68.7431C296.322 57.2065 292.499 45.4986 284.253 37.2361ZM283.019 66.9775L274.567 121.935C274.019 125.569 272.304 128.929 269.716 131.517L122.009 279.229C116.54 284.681 107.694 284.681 102.243 279.229L18.7547 195.748C13.3031 190.28 13.3031 181.434 18.7547 175.983L166.462 28.2709C169.05 25.6653 172.41 23.9682 176.028 23.4197L231.006 14.9516C238.875 13.7688 246.847 16.3743 252.487 21.9798L275.99 45.4814C281.613 51.1211 284.219 59.0921 283.019 66.9775Z" fill="white" stroke="white" stroke-width="4.67" stroke-miterlimit="10"/>
        </svg>`,
        color:"#C5B48D"
    },
    {
        number: "06",
        text: "Do you reference scientifically based impact indicators (e.g., water scarcity, global warming)?",
        svg:`<svg xmlns="http://www.w3.org/2000/svg" width="292" height="49" viewBox="0 0 292 49" fill="none">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M91.0961 17.2254C84.2232 17.2254 77.158 21.1743 71.3812 29.1318C63.5058 39.98 51.4579 48.5683 36.4873 48.5683C21.5167 48.5683 9.46877 39.98 1.59341 29.1318C-1.26083 25.2001 -0.17673 19.8425 4.01482 17.1652C8.20636 14.4879 13.9181 15.5048 16.7723 19.4365C22.5492 27.394 29.6144 31.3429 36.4873 31.3429C43.3602 31.3429 50.4254 27.394 56.2022 19.4365C64.0776 8.58831 76.1255 0 91.0961 0C106.067 0 118.115 8.58831 125.99 19.4365C131.767 27.394 138.832 31.3429 145.705 31.3429C152.578 31.3429 159.643 27.394 165.42 19.4365C173.295 8.58831 185.343 0 200.314 0C215.284 0 227.332 8.58831 235.208 19.4365C240.984 27.394 248.05 31.3429 254.923 31.3429C261.795 31.3429 268.861 27.394 274.638 19.4365C277.492 15.5048 283.203 14.4879 287.395 17.1652C291.587 19.8425 292.671 25.2001 289.816 29.1318C281.941 39.98 269.893 48.5683 254.923 48.5683C239.952 48.5683 227.904 39.98 220.029 29.1318C214.252 21.1743 207.187 17.2254 200.314 17.2254C193.441 17.2254 186.376 21.1743 180.599 29.1318C172.723 39.98 160.676 48.5683 145.705 48.5683C130.734 48.5683 118.686 39.98 110.811 29.1318C105.034 21.1743 97.969 17.2254 91.0961 17.2254Z" fill="white"/>
        </svg>`,
        color:"#AD614F"
    },
    {
        number: "07",
        text: "Do you maintain the unit of measurement and the 'eq' (e.g., CO₂ eq)?",
        svg:`<svg xmlns="http://www.w3.org/2000/svg" width="199" height="141" viewBox="0 0 199 141" fill="none">
        <path d="M55.1914 49.4502C60.2379 5.9 111.126 -13.6453 145.507 13.4795L146.091 13.9482C158.193 23.7821 165.605 38.7617 166.663 54.3496C190.515 60.5528 200.282 80.4888 198.231 99.5625C196.173 118.714 182.196 137.054 158.619 139.796L158.591 139.799H42.46L42.4424 139.798C9.32628 137.418 -9.11617 100.711 6.45117 71.959L6.91504 71.1211C16.7301 53.8451 35.7476 46.1944 55.1914 49.4502ZM152.449 50.5674C148.564 28.2024 127.493 13.5127 105.164 15.6953L104.692 15.7402C86.9272 17.7025 72.1015 32.3674 68.6934 49.7363L68.5381 50.5732C68.3805 51.4795 68.3018 52.617 68.2344 53.8721C68.1676 55.1162 68.1126 56.4717 67.9971 57.7715C67.8815 59.0708 67.7035 60.3452 67.3848 61.4375C67.0686 62.521 66.5948 63.4893 65.8418 64.1084L65.8428 64.1094C63.4787 66.0581 60.4227 65.7344 57.4619 64.9814C55.9759 64.6035 54.4374 64.0952 52.9932 63.6719C51.5295 63.2428 50.1411 62.8943 48.8721 62.7979H48.8711C38.3934 61.9972 30.2183 65.3532 24.5176 70.8604C18.8083 76.3758 15.5549 84.0751 14.9863 91.9902C14.4179 99.905 16.5363 108.006 21.5303 114.324C26.5155 120.631 34.3933 125.197 45.4209 126.013H154.554C171.912 124.799 182.425 112.622 184.604 99.6211C186.783 86.6242 180.636 72.8385 164.624 68.3242H164.623C163.808 68.0941 162.906 67.9429 161.954 67.793C161.012 67.6446 160.021 67.4975 159.069 67.2773C157.286 66.8648 155.542 66.1732 154.38 64.6152L154.155 64.292C153.736 63.6434 153.482 62.6456 153.309 61.5391C153.132 60.4127 153.028 59.0952 152.951 57.7549C152.805 55.2097 152.753 52.6146 152.502 50.8984L152.449 50.5674Z" fill="white" stroke="white"/>
        </svg>`,
        color:"#8A978F"
    },
    {
        number: "08",
        text: 'Are you avoiding vague or misleading terms like "eco-friendly"?',
        svg:`<svg xmlns="http://www.w3.org/2000/svg" width="47" height="282" viewBox="0 0 47 282" fill="none">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M30.3308 88.1545C30.3308 81.5035 26.5095 74.6665 18.8089 69.0762C8.31099 61.4552 0 49.7963 0 35.3091C0 20.8219 8.31099 9.16301 18.8089 1.54196C22.6136 -1.22012 27.7982 -0.171022 30.3891 3.88518C32.9799 7.94138 31.9958 13.4687 28.1911 16.2308C20.4905 21.8211 16.6692 28.6581 16.6692 35.3091C16.6692 41.9601 20.4905 48.7971 28.1911 54.3874C38.689 62.0085 47 73.6674 47 88.1545C47 102.642 38.689 114.301 28.1911 121.922C20.4905 127.512 16.6692 134.349 16.6692 141C16.6692 147.651 20.4905 154.488 28.1911 160.078C38.689 167.699 47 179.358 47 193.845C47 208.333 38.689 219.992 28.1911 227.613C20.4905 233.203 16.6692 240.04 16.6692 246.691C16.6692 253.342 20.4905 260.179 28.1911 265.769C31.9958 268.531 32.9799 274.059 30.3891 278.115C27.7982 282.171 22.6136 283.22 18.8089 280.458C8.31099 272.837 0 261.178 0 246.691C0 232.204 8.31099 220.545 18.8089 212.924C26.5095 207.333 30.3308 200.496 30.3308 193.845C30.3308 187.194 26.5095 180.357 18.8089 174.767C8.31099 167.146 0 155.487 0 141C0 126.513 8.31099 114.854 18.8089 107.233C26.5095 101.643 30.3308 94.8055 30.3308 88.1545Z" fill="white"/>
        </svg>`,
        color:"#BE8F1F"
    },
    {
        number: "09",
        text: 'If using terms with assumed meanings (e.g., "organic," "biodegradable"), are they properly justified?',
        svg:`<svg xmlns="http://www.w3.org/2000/svg" width="164" height="274" viewBox="0 0 164 274" fill="none">
        <path d="M90.9815 207.918V165.629H96.0693C133.478 165.629 164 135.674 164 98.9662V85.1644C164 80.1716 160.109 76.353 155.021 76.353H140.957C121.205 76.353 103.548 84.576 90.9788 97.7919V66.6627C90.9788 29.9522 60.4521 0 23.048 0H8.98371C3.89595 0 0.00466687 3.8184 0.00466687 8.81144V22.6132C0.00466687 59.3237 30.5292 89.2759 67.9354 89.2759H73.0211V162.99C72.1231 162.109 71.5257 161.227 70.6276 160.641C57.76 148.307 41.2997 141.551 23.6427 141.551H23.0434H8.97905C3.89129 141.551 0 145.369 0 150.362V164.164C0 200.875 30.5246 230.827 67.9307 230.827H73.0185V256.377H23.0427C17.955 256.377 14.0637 260.195 14.0637 265.189C14.0637 270.182 17.9547 274 23.0427 274H140.951C146.039 274 149.93 270.182 149.93 265.189C149.93 260.195 146.039 256.377 140.951 256.377H90.9735L90.9815 207.918ZM17.9603 22.6081V17.6153H23.048C50.5796 17.6153 73.0259 39.64 73.0259 66.6602V71.653H67.9381C40.4045 71.653 17.9603 49.6262 17.9603 22.6081ZM140.959 93.9733H146.047V98.9661C146.047 125.984 123.603 148.011 96.0693 148.011H90.9835V143.018C90.9835 116.001 113.427 93.9733 140.959 93.9733H140.959ZM67.9381 212.914C40.4066 212.914 17.9603 190.889 17.9603 163.869V158.876H23.048C36.2168 158.583 48.4847 163.869 58.0608 172.973C67.6369 182.37 73.0233 194.705 73.0233 207.921V212.914H67.9381Z" fill="white"/>
        </svg>`,
        color:"#65758C",
        hasNotApplicable: true
    },
    {
        number: "10",
        text: 'Can your claims be easily understood by consumers, avoiding technical or confusing language?',
        svg:`<svg xmlns="http://www.w3.org/2000/svg" width="224" height="327" viewBox="0 0 224 327" fill="none">
        <path d="M104.995 2.74805C141.383 1.0984 178.997 17.2976 200.149 47.3262L201.111 48.7109C240.656 106.454 214.517 170.966 181.087 223.021L179.477 225.51C174.572 233.04 169.205 240.249 163.877 247.395C158.87 254.11 153.899 260.769 149.309 267.663L148.396 269.045C138.929 283.491 133.875 295.309 119.915 307.601L119.244 308.187C100.711 324.203 74.6244 327.993 52.9961 321.048C31.6293 314.187 14.4292 296.766 13.1982 270.175L13.1523 268.901C13.0874 266.455 13.7412 264.412 14.9619 262.908C16.1791 261.409 17.8583 260.574 19.5811 260.39C23.0376 260.019 26.648 262.276 27.2529 266.61H27.252C27.5756 268.923 27.7238 271.248 27.9219 273.405C28.124 275.606 28.3847 277.738 28.9287 279.909L29.127 280.667C33.4116 296.468 46.0398 305.833 60.958 309.159C76.1634 312.549 93.4821 309.579 106.054 300.887L106.766 300.39C121.533 289.967 125.117 280.527 134.77 265.255V265.254L136.001 263.318C142.175 253.673 148.573 244.552 154.881 235.619C161.618 226.079 168.247 216.762 174.444 207.189C186.827 188.063 197.431 168 203.519 143.49L203.839 142.171C216.991 86.7445 191.16 32.9437 134.441 19.2871L133.085 18.9697C72.6156 5.2045 14.4518 50.6638 15.332 112.938L15.3418 113.237C15.3785 113.978 15.5073 115.004 15.6719 116.294C15.8522 117.707 16.0631 119.358 16.1621 120.971C16.26 122.566 16.2594 124.26 15.958 125.746C15.6642 127.195 15.001 128.845 13.4336 129.775H13.4326C10.0407 131.787 6.14818 129.945 4.37793 127.391L4.37598 127.389C3.91641 126.724 3.64807 125.802 3.47168 125.071C3.27449 124.254 3.11327 123.316 2.9834 122.4C2.78828 121.025 2.6534 119.619 2.5752 118.601L2.51562 117.727V117.726C-0.774172 58.411 43.5594 6.48112 103.264 2.83984L104.995 2.74805Z" fill="white" stroke="white" stroke-width="4"/>
        </svg>`,
        color:"#C5B48D"
    },
    {
        number: "11",
        text: 'Is your claim clearly more than just meeting legal requirements or standard industry practices?',
        svg:`<svg xmlns="http://www.w3.org/2000/svg" width="274" height="268" viewBox="0 0 274 268" fill="none">
        <path d="M266.626 4.63797C269.488 4.85472 271.721 7.25832 271.706 10.1551L271.609 28.1418C271.39 65.6967 271.1 94.0421 270.739 113.174L270.654 117.425L270.652 117.518L270.639 117.611C269.909 122.606 266.651 125.447 263.02 125.211C259.427 124.977 256.471 121.78 256.213 116.814L256.211 116.764L256.211 116.713L257.554 28.1851L12.4158 264.912C11.6971 265.606 10.7443 265.831 9.94239 265.878C9.11331 265.927 8.23164 265.802 7.41348 265.589C6.58822 265.374 5.76579 265.054 5.04339 264.668C4.33962 264.292 3.63869 263.805 3.14192 263.212L3.14262 263.212C2.60191 262.567 2.26084 261.734 2.04835 260.934C1.82993 260.112 1.71613 259.209 1.70152 258.33C1.68696 257.454 1.76998 256.552 1.97671 255.74C2.17555 254.959 2.52904 254.099 3.17304 253.477L247.237 17.787C245.56 17.7232 243.329 17.6428 240.655 17.5534C234.388 17.3437 225.699 17.0782 216.054 16.8201C196.756 16.3035 173.651 15.8187 158.441 15.88L158.29 15.8808L158.142 15.8513C153.942 15.0145 151.39 11.9399 151.531 8.5968C151.676 5.17225 154.575 2.37394 159.402 1.91826L159.49 1.91014L159.581 1.91241L266.346 4.62411L266.626 4.63797Z" fill="white" stroke="white" stroke-width="3"/>
        </svg>`,
        color:"#AD614F"
    },
    {
        number: "12",
        text: 'Has your claim been verified by a third party, not just self-verified?',
        svg:`<svg xmlns="http://www.w3.org/2000/svg" width="167" height="131" viewBox="0 0 167 131" fill="none">
        <path d="M154.387 3.94727C157.344 1.28935 160.956 1.68449 163.147 3.71582C164.223 4.713 164.953 6.10382 165.063 7.66992C165.175 9.25401 164.646 10.9049 163.404 12.3955L163.381 12.4238L163.355 12.4512C129.086 49.7177 95.7914 87.8721 62.502 126.043L62.4727 126.076L62.4414 126.107C60.9299 127.647 59.4097 128.545 57.8242 128.679C56.209 128.815 54.8689 128.131 53.7988 127.258C52.7489 126.401 51.8161 125.246 50.9883 124.18C50.2285 123.201 49.5509 122.29 48.8506 121.509L48.5479 121.182C38.1601 110.297 27.9805 99.2451 17.7471 88.2549L13.3574 83.5498C12.3866 82.5119 9.86915 80.1872 7.37012 77.7178C6.15261 76.5147 4.95976 75.2957 4.03711 74.2471C3.57702 73.7242 3.16434 73.2204 2.84375 72.7676C2.59433 72.4153 2.30351 71.9634 2.15039 71.4893L2.09375 71.2852C1.49496 68.6838 1.98579 66.3095 3.66992 64.8027C5.22281 63.4136 7.44222 63.0778 9.76074 63.5996L10.2256 63.7148L10.5938 63.8154L10.8691 64.0801C21.4413 74.2205 31.3812 85.3019 41.3799 95.9443L41.3828 95.9473L41.3994 95.9648C46.7516 101.661 52.0251 107.402 57.4033 113.044C89.4959 76.5613 121.402 39.8682 154.285 4.04785L154.333 3.99512L154.387 3.94727Z" fill="white" stroke="white" stroke-width="3"/>
        </svg>`,
        color:"#8A978F"
    },
    {
        number: "13",
        text: 'Have you provided access to substantiating evidence?',
        svg:`<svg xmlns="http://www.w3.org/2000/svg" width="302" height="343" viewBox="0 0 302 343" fill="none">
        <path d="M217.944 7.9124C163.048 -10.3519 102.267 11.8345 73.6323 62.3534L72.9788 63.5216C45.8524 112.637 56.0814 174.732 97.3103 212.556L3.1864 329.538L3.15703 329.575L3.12971 329.613C0.601981 333.196 1.31774 337.122 3.79206 339.328C6.2883 341.553 10.2605 341.758 13.5471 338.689L13.5481 338.688C14.3421 337.947 14.855 337.074 15.2551 336.354C15.6874 335.576 15.9716 335.017 16.3679 334.524L16.3678 334.523C32.9139 313.979 49.3108 293.705 65.8542 273.253L65.859 273.253L66.2492 272.77C80.1281 255.61 94.1475 238.448 108.036 221.254C151.925 253.759 214.009 252.203 256.078 217.097L257.077 216.254C327.88 155.805 308.085 38.9915 219.24 8.35188L217.944 7.9124ZM84.9661 175.539C45.6621 104.903 93.7684 19.2562 173.719 14.984L174.803 14.9374C259.103 11.2242 314.117 102.551 272.584 176.31L272.101 177.162C230.707 249.226 126.371 248.55 85.4347 176.374L84.9661 175.539Z" fill="white" stroke="white" stroke-width="3"/>
        </svg>`,
        color:"#BE8F1F"
    },
    {
        number: "14",
        text: "If you're using sustainability-related visuals, do they accurately reflect reality?",
        svg:`<svg xmlns="http://www.w3.org/2000/svg" width="344" height="221" viewBox="0 0 344 221" fill="none">
        <path d="M171.556 7.5C215.324 7.5 256.577 29.3308 287.229 54.2402C302.486 66.6396 314.865 79.6034 323.361 90.5723C327.615 96.0646 330.806 100.941 332.895 104.898C335.137 109.149 335.612 111.425 335.612 112.025C335.612 112.596 335.157 114.796 332.931 118.912C330.857 122.745 327.682 127.457 323.437 132.759C314.959 143.345 302.595 155.812 287.344 167.72C256.722 191.629 215.428 212.551 171.556 212.551C127.684 212.551 86.3903 191.628 55.7686 167.579C40.517 155.426 28.1533 143.345 19.6758 132.759C15.4304 127.457 12.2542 122.745 10.1807 118.912C7.95427 114.796 7.50008 112.596 7.5 112.025C7.5 111.425 7.97504 109.149 10.2178 104.898C12.3059 100.941 15.4968 96.0647 19.751 90.5723C28.2469 79.6034 40.6255 66.6396 55.8828 54.2402C86.5338 29.3308 127.788 7.5001 171.556 7.5Z" stroke="white" stroke-width="15" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>`,
        color:"#65758C",
        hasNotApplicable: true
    },
    {
        number: "15",
        text: "Are you ensuring one positive aspect doesn't mask significant negative impacts?",
        svg:`<svg xmlns="http://www.w3.org/2000/svg" width="31" height="183" viewBox="0 0 31 183" fill="none">
        <path d="M3.76739 12.0009C3.55904 5.43546 8.82477 0 15.3935 0C21.9441 0 27.2028 5.40673 27.021 11.9548L23.9305 123.256C23.8054 127.759 20.119 131.345 15.6142 131.345C11.1223 131.345 7.44147 127.779 7.29899 123.289L3.76739 12.0009ZM15.6303 183C7.03361 183 0 175.991 0 167.685C0 158.86 7.03361 152.111 15.6303 152.111C24.2269 152.111 31 158.86 31 167.685C31 175.991 24.2269 183 15.6303 183Z" fill="white"/>
        </svg>`,
        color:"#C5B48D"
    },
    {
        number: "16",
        text: "If you're using aggregated environmental scores, is it approved by the EU?",
        svg:`<svg xmlns="http://www.w3.org/2000/svg" width="59" height="56" viewBox="0 0 59 56" fill="none">
        <path d="M29.4033 1.5C32.1438 1.50007 34.4072 3.69856 34.4072 6.45898V23.2598L50.9355 17.9316C53.4888 17.1067 56.2483 18.4311 57.1738 20.9229L57.2578 21.168L57.2617 21.1807L57.2734 21.2197L57.3428 21.4619C57.993 23.9663 56.5845 26.5484 54.1162 27.3848H54.1152L37.5898 32.9707L47.748 46.4141H47.749C49.4292 48.6355 48.9394 51.7801 46.6787 53.3984L46.6797 53.3994L46.4629 53.5566L46.457 53.5605C44.2139 55.1655 41.076 54.6671 39.4609 52.4229V52.4238L29.4561 38.5527L18.8516 52.4756L18.8506 52.4775C17.2166 54.6184 14.1795 55.0733 11.9893 53.5498L11.7803 53.3955C9.63677 51.7356 9.21963 48.683 10.8564 46.5186L21.0742 32.9961L4.95508 27.8047V27.8037C2.36169 26.9694 0.905086 24.2102 1.73047 21.6074L1.73242 21.6025L1.86816 21.1807H1.86719C2.7064 18.5228 5.57776 17.0951 8.2168 17.9609H8.21777L24.2617 23.2373V6.45898C24.2617 3.70667 26.5168 1.5 29.2656 1.5H29.4033Z" fill="white" stroke="white" stroke-width="3"/>
        </svg>`,
        color:"#AD614F",
        hasNotApplicable: true
    },
    {
        number: "17",
        text: "If comparing items, are you comparing only with products that serve the same function?",
        svg:`<svg xmlns="http://www.w3.org/2000/svg" width="141" height="120" viewBox="0 0 141 120" fill="none">
        <path d="M26.9082 6.5H114.092C121.592 6.50001 127.833 12.2139 128.528 19.6426L128.557 19.998L133.96 97.998C134.541 106.381 127.898 113.5 119.495 113.5H21.5049C13.2335 113.5 6.66672 106.601 7.01758 98.3896L7.04004 97.998L12.4434 19.998C12.9699 12.397 19.289 6.50001 26.9082 6.5Z" stroke="white" stroke-width="13"/>
        </svg>`,
        color:"#8A978F",
        hasNotApplicable: true
    },
    {
        number: "19",
        text: "If you claim carbon neutrality, have you explained if it's via cuts or offsets?",
        svg:`<svg xmlns="http://www.w3.org/2000/svg" width="365" height="368" viewBox="0 0 365 368" fill="none">
        <path d="M258.377 1.7584C261.244 2.30757 263.769 4.60705 263.965 8.24265L263.976 8.59813L263.977 8.60157L263.966 8.90979C263.943 9.21393 263.889 9.49954 263.851 9.69845C263.819 9.86382 263.794 9.99039 263.775 10.0941L263.739 10.3524L263.719 10.6041L263.617 10.8359L190.973 176.169L353.446 97.7636L353.563 97.7077L353.685 97.6724C357.713 96.5193 361.076 98.3851 362.425 101.323C363.778 104.268 363 108.043 359.463 110.411L359.376 110.469L359.281 110.515L182.217 196.005L144.233 282.509C156.638 278.775 170.396 280.436 181.258 287.981L181.963 288.482C211.29 309.672 202.153 355.488 167.335 364.615L166.5 364.825C132.572 373.051 103.967 338.847 117.519 306.987L117.846 306.235C131.433 275.825 145.114 245.461 158.48 214.947L161.149 208.841C161.695 207.59 162.256 206.305 162.856 205.025C162.405 205.242 161.933 205.476 161.449 205.722C159.935 206.492 158.279 207.384 157.069 207.964L157.068 207.964C126.479 222.628 95.683 237.055 65.5953 252.574C26.9777 272.499 -12.6272 232.102 7.38461 195.39L7.86814 194.524C28.6915 158.107 84.1584 169.564 87.703 211.599L87.7023 211.6L87.7507 212.236C88.1314 217.87 87.1578 222.043 85.8408 226.901L171.383 185.518L250.506 5.82968L250.514 5.81158L250.522 5.79278C252.103 2.44957 255.449 1.19781 258.377 1.7584ZM176.354 301.922L176.09 301.677C163.684 290.528 141.821 292.901 133.17 307.394L132.754 308.109C124.219 323.16 127.967 341.183 144.029 349.125L144.706 349.45C158.925 356.083 172.726 349.995 180.154 339.306C187.691 328.459 188.48 313.136 176.354 301.922ZM64.7789 194.167C49.5567 180.097 24.9881 186.557 18.0156 206.074L17.8572 206.532C11.2878 225.923 26.8293 245.798 47.4203 243.901L47.9773 243.839C50.8118 243.471 54.3529 242.247 57.7418 240.529C61.1313 238.81 64.2072 236.679 66.1691 234.605L66.5459 234.191C76.4853 222.857 76.0786 205.168 65.2993 194.661L64.7789 194.167Z" fill="white" stroke="white" stroke-width="3"/>
        </svg>`,
        color:"#BE8F1F",
        hasNotApplicable: true
    },
    {
        number: "20",
        text: "If you claim carbon neutrality, have you provided details on your offset programs?",
        svg:`<svg xmlns="http://www.w3.org/2000/svg" width="302" height="343" viewBox="0 0 302 343" fill="none">
        <path d="M217.944 7.9124C163.048 -10.3519 102.267 11.8345 73.6323 62.3534L72.9788 63.5216C45.8524 112.637 56.0814 174.732 97.3103 212.556L3.1864 329.538L3.15703 329.575L3.12971 329.613C0.601981 333.196 1.31774 337.122 3.79206 339.328C6.2883 341.553 10.2605 341.758 13.5471 338.689L13.5481 338.688C14.3421 337.947 14.855 337.074 15.2551 336.354C15.6874 335.576 15.9716 335.017 16.3679 334.524L16.3678 334.523C32.9139 313.979 49.3108 293.705 65.8542 273.253L65.859 273.253L66.2492 272.77C80.1281 255.61 94.1475 238.448 108.036 221.254C151.925 253.759 214.009 252.203 256.078 217.097L257.077 216.254C327.88 155.805 308.085 38.9915 219.24 8.35188L217.944 7.9124ZM84.9661 175.539C45.6621 104.903 93.7684 19.2562 173.719 14.984L174.803 14.9374C259.103 11.2242 314.117 102.551 272.584 176.31L272.101 177.162C230.707 249.226 126.371 248.55 85.4347 176.374L84.9661 175.539Z" fill="white" stroke="white" stroke-width="3"/>
        </svg>`,
        color:"#65758C",
        hasNotApplicable: true
    },
];

function generateQuestions() {
    const form = document.getElementById('questionsForm');
    questions.forEach((question, index) => {
        const questionRow = document.createElement('div');
        questionRow.className = `question-row ${index === 0 ? 'active' : ''}`;
        questionRow.innerHTML = `
            <div class="qQuestion">
                <div class="questionNumber">
                    ${question.number}
                </div>
                <div class="question">
                    ${question.text}
                </div>
                <div>
                    <input 
                    class="aButton yes"
                    type="button" name="q${index + 1}" value="Yes">
                    
                    <input 
                    class="aButton"
                    type="button" name="q${index + 1}" value="No">

                    ${question.hasNotApplicable ? `
                    <input 
                    class="aButton"
                    type="button" name="q${index + 1}" value="Not Applicable">
                    ` : ''}
                </div>
            </div>
            <div class="iconContainer" style="background-color: ${question.color}">
                ${question.svg}
            </div>
        `;
        form.appendChild(questionRow);

        // Agregar event listeners a los botones de esta pregunta
        const buttons = questionRow.querySelectorAll('input[type="button"]');
        buttons.forEach(button => {
            button.addEventListener('click', () => {
                // Marcar el botón como seleccionado
                buttons.forEach(btn => btn.classList.remove('selected'));
                button.classList.add('selected');
                
                // Actualizar el contador y mostrar la siguiente pregunta
                updateYesCount();
                showNextQuestion();
            });
        });
    });
}

// Llamar a la función cuando el documento esté listo
document.addEventListener('DOMContentLoaded', generateQuestions);

document.querySelector('.startNow').addEventListener('click', function() {
    const questionsForm = document.getElementById('questionsForm'); 
    const y = questionsForm.getBoundingClientRect().top + window.scrollY ;
    window.scrollTo({top: y, behavior: 'smooth'});
});

function showNextQuestion() {
    const currentRow = document.querySelector(`.question-row:nth-of-type(${currentQuestion})`);
    if (currentRow) {
        const currentScroll = window.scrollY;
        currentRow.classList.add('fade-out');
        
        setTimeout(() => {
            currentRow.classList.remove('active');
            currentQuestion++;
            
            if (currentQuestion <= questions.length) {
                const nextRow = document.querySelector(`.question-row:nth-of-type(${currentQuestion})`);
                if (nextRow) {
                    nextRow.classList.add('active');
                    nextRow.classList.remove('fade-out');
                    window.scrollTo(0, currentScroll);
                }
            } else {
                // Mostrar el footer cuando se responde la última pregunta
                const footer = document.querySelector('.footer');
                const footerFormSection = document.querySelector('.footerFormSection');
                if (footer && footerFormSection) {
                    footer.classList.add('active');
                    footerFormSection.classList.add('active');
                }
            }
        }, 400);
    }
}

function updateYesCount() {
    yesCount = 0; 
    answerCount = 0;

    for (let i = 1; i <= questions.length; i++) {
        const selectedButton = document.querySelector(`input[name="q${i}"].selected`);
        if (selectedButton) {
            answerCount++;
            if (selectedButton.value === "Yes") {
                yesCount++;
            }
        }
    }

    if ((answerCount === questions.length) && (formSubmitted === true)) {
        document.querySelector('.containerChart').style.display = 'flex'; 
        document.querySelector('.chartTitleSection').style.display = 'flex';
        document.querySelector('.footer').style.backgroundColor = '#CACACA';
        document.querySelector('.footer').style.height = '300px';

        document.querySelector('.footerFormSection').classList.remove('active');
        document.querySelector('.footerFormSection2').classList.add('active');

        document.getElementById('section1').style.display = 'none'; 
    } else {
        document.querySelector('.containerChart').style.display = 'none'; 
        document.querySelector('.chartTitleSection').style.display = 'none'; 
        document.querySelector('.footer').style.backgroundColor = '#1E2032';
        document.querySelector('.footerFormSection').classList.add('active');
        document.querySelector('.footerFormSection2').classList.remove('active');
        
        document.getElementById('section1').style.display = 'block'; 
    }

    updateChart(yesCount);
}

function setFormSubmittedTrue() {
    formSubmitted = true;
    updateYesCount()
}

window.setFormSubmittedTrue = setFormSubmittedTrue;

// Manejo especial para la primera pregunta con botones
const firstQuestionButtons = document.querySelectorAll('input[name="q1"]');
firstQuestionButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Marcar el botón como seleccionado
        firstQuestionButtons.forEach(btn => btn.classList.remove('selected'));
        button.classList.add('selected');
        
        // Actualizar el contador y mostrar la siguiente pregunta
        updateYesCount();
        showNextQuestion();
    });
});

// Para el resto de las preguntas (radio buttons)
for (let i = 2; i <= 20; i++) {
    const yesOption = document.querySelector(`input[name="q${i}"][value="yes"]`);
    const noOption = document.querySelector(`input[name="q${i}"][value="no"]`);
    const naOption = document.querySelector(`input[name="q${i}"][value="na"]`);

    if (yesOption) {
        yesOption.addEventListener('change', () => {
            updateYesCount();
            showNextQuestion();
        });
    }
    if (noOption) {
        noOption.addEventListener('change', () => {
            updateYesCount();
            showNextQuestion();
        });
    }
    if (naOption) {
        naOption.addEventListener('change', () => {
            updateYesCount();
            showNextQuestion();
        });
    }
}

function updateChart(yesCount) {

    if(yesCount > 0) {
        chartColor = "#84434C" 
        document.getElementById('redPractice').style.display = 'block'; 
        document.getElementById('yellowPractice').style.display = 'none'; 
        document.getElementById('greenPractice').style.display = 'none'; 

    }
    
    if(yesCount > 9) {
        chartColor = "#D1A94C"
        document.getElementById('redPractice').style.display = 'none'; 
        document.getElementById('yellowPractice').style.display = 'block'; 
        document.getElementById('greenPractice').style.display = 'none'; 
    }
    
    if(yesCount > 14) {
        chartColor = "#8A978F"
        document.getElementById('redPractice').style.display = 'none'; 
        document.getElementById('yellowPractice').style.display = 'none'; 
        document.getElementById('greenPractice').style.display = 'block'; 
    }

    const ctx = document.getElementById('scoreChart').getContext('2d');
    const chartData = {
        
        datasets: [{
            label: 'Number of responses',
            data: [yesCount, 20 - yesCount],
            backgroundColor: [chartColor, '#CACACA'],
        }]
    };
    
    const centerTextPlugin = {
        id: 'centerText',
        beforeDraw(chart) {
            const { width } = chart;
            const { height } = chart;
            const ctx = chart.ctx;
            ctx.restore();

            const fontSize = (height / 5).toFixed(2);
            ctx.font = `${fontSize}px Arial`;
            ctx.textBaseline = 'middle';
            ctx.fillStyle = '#000000';

            const text = chart.data.datasets[0].data[0].toString();
            const textX = Math.round((width - ctx.measureText(text).width) / 2);
            const textY = height / 2;

            ctx.fillText(text, textX, textY);
            ctx.save();
        }
    };

    if (window.myChart) {
        window.myChart.data = chartData; 
        window.myChart.update(); 
    } else {
        window.myChart = new Chart(ctx, {
            type: 'doughnut',
            data: chartData,
            options: {
                responsive: true,
                cutout: '80%',
                elements: {
                    arc: {
                        borderRadius:  [20, 20]
                    }
                }
            },
            plugins: [centerTextPlugin]
        });
    }
}

