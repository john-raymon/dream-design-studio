import Head from 'next/head'
import Image from 'next/image'
import { TextField, Button } from 'lite-react-ui';
import copy from 'copy-to-clipboard';
import { useState } from 'react';

export default function Home() {
  const [toggle, setToggle] = useState(false);

  function handleMouseEnter(e) {
    if (!toggle) {
      setToggle(!toggle);
    }
  }

  function handleEmailClick(e) {
    copy('hello@dreamdesignstudio.co');
  }

  return (
    <div>
      <Head>
        <title>Dream Design Studio</title>
        <meta name="description" content="Dream Design Studio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="relative w-full h-full bg-black flex flex-col items-center px-12 py-10">
        <div className="absolute flex-col flex justify-center h-full left-0 top-0 -mt-20 lg:-mt-0 -ml-40 lg:-ml-32">
          <p onMouseEnter={handleMouseEnter} className={`contact-text text-white text-base uppercase tracking-__widest flex justify-center text-center text-opacity-80 transform -rotate-90`}>
            <span onClick={(toggle ? handleEmailClick : null)}className={`w-auto ${toggle ? 'typing-demo' : 'cursor-pointer'}`}> 
            {
              toggle ?
              (
                `HELLO@DREAMDESIGNSTUDIO.CO`
              )
              :
              (
                `ASK US ANYTHING`
              )
            }
            </span>
          </p>
        </div>
        <div className="w-7/12 md:w-4/12 mx-auto self-center py-20 lg:py-0">
          <svg width="100%" height="100%" viewBox="0 0 587 588" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.8">
            <path d="M269.12 543.621L258.157 540.891C256.5 540.478 254.802 539.995 253.062 539.443C251.289 538.912 249.619 538.185 248.052 537.26C246.458 536.328 245.039 535.143 243.794 533.704C242.514 532.287 241.527 530.482 240.831 528.289C240.129 526.124 239.789 523.515 239.812 520.461C239.801 517.429 240.28 513.835 241.249 509.681L246.121 488.797C247.091 484.643 248.252 481.205 249.606 478.483C250.933 475.754 252.386 473.591 253.966 471.995C255.545 470.398 257.22 469.256 258.991 468.569C260.727 467.902 262.51 467.53 264.34 467.451C266.142 467.365 267.953 467.489 269.772 467.823C271.558 468.179 273.279 468.563 274.936 468.976L285.898 471.706L269.12 543.621ZM270.876 476.029C268.974 475.555 267.353 475.418 266.013 475.619C264.645 475.813 263.461 476.454 262.46 477.541C261.425 478.65 260.516 480.265 259.734 482.386C258.945 484.536 258.157 487.295 257.371 490.664L252.165 512.979C251.379 516.347 250.866 519.16 250.627 521.417C250.382 523.702 250.478 525.568 250.917 527.014C251.322 528.481 252.091 529.623 253.222 530.439C254.327 531.249 255.83 531.891 257.732 532.364L260.422 533.034L273.566 476.698L270.876 476.029Z" fill="white"/>
            <path d="M204.399 521.759L194.295 515.503C193.144 514.791 191.915 513.962 190.606 513.017C189.273 512.057 188.038 510.956 186.902 509.714C185.727 508.481 184.727 507.088 183.902 505.533C183.053 503.964 182.525 502.206 182.317 500.26C182.086 498.3 182.26 496.118 182.839 493.716C183.403 491.339 184.519 488.714 186.185 485.841L187.112 484.244C189.913 479.414 192.868 475.892 195.978 473.677C199.073 471.486 202.314 470.531 205.703 470.812L210.568 439.338L220.421 445.438L214.813 474.231L218.301 476.391L232.07 452.652L241.203 458.307L204.399 521.759ZM212.869 482.47C211.239 481.46 209.753 480.793 208.411 480.466C207.069 480.14 205.799 480.196 204.601 480.632C203.388 481.093 202.21 481.945 201.065 483.189C199.906 484.457 198.709 486.156 197.473 488.286L194.564 493.302C193.616 494.936 192.941 496.437 192.539 497.804C192.137 499.171 192.061 500.453 192.311 501.652C192.537 502.835 193.105 503.961 194.016 505.03C194.928 506.099 196.234 507.161 197.936 508.215L199.338 509.083L214.271 483.338L212.869 482.47Z" fill="white"/>
            <path d="M151.252 482.651L132.996 462.755L139.202 456.677L149.988 468.432L165.533 453.205L157.198 444.122L163.404 438.043L171.739 447.126L189.535 429.695L178.461 417.625L184.667 411.547L203.211 431.757L151.252 482.651Z" fill="white"/>
            <path d="M112.281 431.285L106.315 419.945L162.893 372.591L168.139 382.561L157.81 390.679L164.056 402.551L176.227 397.934L181.492 407.942L112.281 431.285ZM151.229 395.854L122.289 418.023L122.509 418.441L156.274 405.443L151.229 395.854Z" fill="white"/>
            <path d="M88.7578 376.467L86.5327 362.01L112.818 350.499C115.739 349.259 118.547 348.198 121.241 347.317C123.908 346.44 126.425 345.603 128.792 344.805L128.739 344.462C126.249 344.462 123.605 344.473 120.807 344.494C117.981 344.52 114.993 344.411 111.843 344.169L83.3661 341.436L81.187 327.278L151.896 315.661L153.489 326.012L130.099 329.855C126.511 330.444 123.057 330.982 119.736 331.47C116.411 331.928 113.36 332.327 110.582 332.667C107.777 333.01 105.301 333.286 103.154 333.492C101.007 333.699 99.3037 333.847 98.0442 333.937L98.1693 334.75L146.027 338.201L147.107 345.216L102.659 363.921L102.784 364.734C104.009 364.416 105.672 364.011 107.776 363.519C109.879 363.027 112.315 362.495 115.085 361.923C117.828 361.356 120.85 360.772 124.154 360.17C127.452 359.541 130.896 358.931 134.483 358.342L157.874 354.499L159.467 364.85L88.7578 376.467Z" fill="white"/>
            <path d="M89.3503 254.908L93.0942 243.918C93.6601 242.256 94.2974 240.56 95.0059 238.828C95.6974 237.059 96.568 235.417 97.6177 233.9C98.6768 232.357 99.9623 231.019 101.474 229.885C102.969 228.714 104.808 227.883 106.99 227.391C109.146 226.89 111.693 226.806 114.631 227.139C117.551 227.436 120.962 228.294 124.864 229.713L144.476 236.845C148.378 238.264 151.57 239.807 154.053 241.476C156.546 243.117 158.48 244.83 159.857 246.617C161.233 248.403 162.162 250.241 162.644 252.13C163.11 253.983 163.287 255.853 163.177 257.742C163.076 259.603 162.772 261.452 162.265 263.287C161.741 265.087 161.196 266.817 160.63 268.478L156.887 279.468L89.3503 254.908ZM154.253 263.588C154.902 261.681 155.199 260.029 155.142 258.631C155.094 257.205 154.598 255.923 153.653 254.783C152.691 253.607 151.228 252.509 149.264 251.489C147.275 250.459 144.698 249.369 141.535 248.218L120.578 240.597C117.415 239.447 114.759 238.634 112.61 238.159C110.435 237.674 108.629 237.583 107.192 237.887C105.738 238.154 104.56 238.828 103.659 239.908C102.767 240.961 101.996 242.441 101.347 244.348L100.428 247.044L153.334 266.284L154.253 263.588Z" fill="white"/>
            <path d="M116.292 192.277L131.567 169.86L138.56 174.946L129.534 188.191L147.049 200.932L154.023 190.697L161.016 195.784L154.042 206.018L174.093 220.604L183.36 207.005L190.352 212.091L174.835 234.863L116.292 192.277Z" fill="white"/>
            <path d="M185.802 194.975C184.816 193.757 183.975 192.583 183.279 191.453C182.587 190.282 181.895 188.978 181.206 187.541L187.669 181.956L189.901 184.714C191.138 186.242 192.318 187.519 193.44 188.545C194.583 189.552 195.69 190.289 196.76 190.757C197.834 191.183 198.885 191.311 199.911 191.139C200.942 190.926 201.96 190.385 202.968 189.514C204.554 188.143 205.407 186.654 205.526 185.045C205.627 183.415 204.978 181.736 203.579 180.008C202.862 179.122 202.143 178.369 201.423 177.75C200.706 177.089 199.902 176.523 199.01 176.052C198.14 175.562 197.136 175.131 195.997 174.76C194.841 174.366 193.473 174.005 191.895 173.675L174.58 170.513C171.387 169.809 168.539 168.788 166.036 167.451C163.514 166.092 161.303 164.238 159.403 161.89C157.879 160.008 156.759 158.039 156.043 155.985C155.349 153.912 155.081 151.848 155.238 149.792C155.378 147.715 155.979 145.689 157.042 143.717C158.108 141.704 159.638 139.836 161.632 138.113C164.054 136.02 166.356 134.633 168.537 133.952C170.74 133.253 172.79 133.063 174.687 133.381C176.584 133.699 178.308 134.411 179.859 135.517C181.414 136.583 182.774 137.835 183.94 139.275C184.926 140.493 185.744 141.706 186.393 142.914C187.047 144.081 187.757 145.386 188.526 146.83L182.095 152.388L179.916 149.697C177.478 146.685 175.195 144.742 173.068 143.87C170.924 142.976 168.908 143.344 167.022 144.974C165.457 146.326 164.656 147.79 164.619 149.365C164.565 150.917 165.147 152.447 166.366 153.953C167.012 154.75 167.648 155.424 168.275 155.973C168.924 156.505 169.579 156.954 170.242 157.323C170.908 157.651 171.608 157.93 172.342 158.162C173.076 158.393 173.871 158.61 174.726 158.812L194.194 162.541C197.87 163.392 201.067 164.506 203.786 165.884C206.486 167.239 208.822 169.135 210.794 171.571C212.426 173.587 213.585 175.671 214.272 177.825C214.981 179.961 215.224 182.084 215.003 184.196C214.781 186.307 214.117 188.367 213.011 190.377C211.888 192.364 210.318 194.229 208.303 195.97C205.817 198.119 203.47 199.563 201.264 200.303C199.079 201.024 197.036 201.246 195.136 200.969C193.257 200.673 191.531 199.981 189.958 198.893C188.407 197.787 187.022 196.481 185.802 194.975Z" fill="white"/>
            <path d="M199.108 112.494L208.789 107.417L241.198 173.379L231.516 178.457L199.108 112.494Z" fill="white"/>
            <path d="M269.217 163.968C268.401 164.166 267.426 164.3 266.293 164.368C265.167 164.465 263.951 164.36 262.647 164.055C261.37 163.743 260.052 163.189 258.693 162.393C257.328 161.569 255.994 160.381 254.692 158.829C253.412 157.243 252.204 155.223 251.07 152.77C249.929 150.289 248.949 147.25 248.128 143.653L242.307 118.149C241.479 114.524 241.059 111.363 241.047 108.667C241.028 105.942 241.296 103.592 241.85 101.618C242.398 99.6156 243.165 97.9454 244.152 96.6074C245.166 95.2627 246.278 94.161 247.489 93.3024C248.693 92.4156 249.929 91.7288 251.196 91.2421C252.463 90.7554 253.655 90.3761 254.77 90.1044C257.599 89.4152 260.072 89.2428 262.189 89.5873C264.327 89.897 266.154 90.6086 267.672 91.7222C269.21 92.801 270.45 94.2048 271.39 95.9337C272.357 97.656 273.078 99.5569 273.553 101.636C273.905 103.182 274.137 104.639 274.248 106.006C274.38 107.338 274.476 108.828 274.536 110.475L266.091 112.532L265.311 109.118C263.509 101.221 260.554 97.7728 256.447 98.7735C255.332 99.0452 254.411 99.4772 253.685 100.069C252.959 100.662 252.433 101.502 252.107 102.59C251.774 103.65 251.649 104.986 251.729 106.598C251.837 108.203 252.154 110.158 252.68 112.462L260.127 145.09C260.64 147.338 261.189 149.177 261.774 150.607C262.386 152.03 263.053 153.128 263.775 153.902C264.524 154.668 265.338 155.152 266.217 155.354C267.116 155.52 268.124 155.468 269.239 155.196C270.408 154.911 271.344 154.357 272.046 153.533C272.742 152.681 273.237 151.641 273.531 150.412C273.824 149.184 273.924 147.795 273.829 146.246C273.761 144.69 273.528 143.041 273.13 141.299L270.985 131.898L265.558 133.22L263.923 126.054L279.63 122.227L287.953 158.69L280.935 160.4L278.234 153.85C277.511 156.844 276.413 159.144 274.942 160.748C273.491 162.318 271.583 163.391 269.217 163.968Z" fill="white"/>
            <path d="M305.473 84.0245L314.248 84.7538L327.704 135.536L327.955 135.557C327.961 134.399 327.949 133.109 327.92 131.687C327.89 130.265 327.889 128.657 327.917 126.864C327.947 125.041 328.008 122.99 328.102 120.709C328.195 118.428 328.353 115.864 328.575 113.014L330.669 86.1186L340.363 86.9243L334.622 160.661L325.764 159.924L312.289 110.444L311.955 110.416C311.938 111.718 311.94 113.138 311.96 114.675C311.983 116.183 311.97 117.964 311.923 120.016C311.875 122.069 311.787 124.466 311.657 127.207C311.53 129.919 311.321 133.146 311.03 136.888L309.342 158.56L299.732 157.761L305.473 84.0245Z" fill="white"/>
            <path d="M373.621 157.916C374.388 156.539 375.165 155.319 375.952 154.255C376.777 153.18 377.723 152.06 378.791 150.896L386.093 155.241L384.356 158.356C383.394 160.082 382.64 161.666 382.095 163.108C381.573 164.564 381.285 165.891 381.229 167.091C381.211 168.28 381.457 169.342 381.967 170.279C382.515 171.205 383.358 172.007 384.496 172.684C386.288 173.75 387.936 174.064 389.438 173.625C390.954 173.161 392.256 171.954 393.344 170.002C393.902 169.001 394.339 168.045 394.654 167.132C395.007 166.21 395.244 165.235 395.365 164.207C395.511 163.194 395.556 162.072 395.501 160.839C395.46 159.582 395.317 158.131 395.073 156.487L391.981 138.603C391.521 135.263 391.467 132.149 391.819 129.26C392.186 126.346 393.108 123.563 394.587 120.911C395.772 118.784 397.175 117.02 398.795 115.618C400.439 114.231 402.222 113.259 404.144 112.704C406.08 112.123 408.128 112.009 410.286 112.36C412.483 112.701 414.707 113.541 416.959 114.881C419.696 116.51 421.749 118.265 423.119 120.146C424.513 122.042 425.392 123.965 425.757 125.914C426.121 127.864 426.068 129.781 425.597 131.667C425.165 133.542 424.495 135.293 423.589 136.919C422.822 138.295 422.001 139.507 421.128 140.553C420.293 141.589 419.351 142.728 418.304 143.97L411.039 139.647L412.733 136.607C414.63 133.205 415.608 130.321 415.668 127.958C415.742 125.569 414.713 123.741 412.582 122.473C410.814 121.421 409.209 121.149 407.765 121.656C406.335 122.138 405.146 123.229 404.198 124.931C403.696 125.832 403.303 126.681 403.02 127.478C402.76 128.29 402.578 129.081 402.471 129.851C402.403 130.61 402.39 131.385 402.432 132.177C402.475 132.969 402.552 133.814 402.663 134.713L405.982 154.881C406.475 158.74 406.564 162.225 406.249 165.336C405.948 168.422 405.03 171.341 403.496 174.093C402.227 176.37 400.732 178.213 399.011 179.622C397.315 181.045 395.47 182.012 393.475 182.525C391.48 183.037 389.379 183.103 387.172 182.723C384.98 182.318 382.745 181.438 380.469 180.083C377.659 178.412 375.539 176.633 374.106 174.748C372.698 172.877 371.793 170.972 371.39 169.033C371.012 167.109 371.046 165.196 371.492 163.296C371.963 161.411 372.672 159.617 373.621 157.916Z" fill="white"/>
            <path d="M453.72 154.942L445.599 146.489L451.667 140.265L475.53 165.1L469.462 171.324L461.37 162.903L416.627 208.795L408.978 200.835L453.72 154.942Z" fill="white"/>
            <path d="M493.263 189.564L498.492 199.493L452.391 225.407C450.427 226.511 448.848 227.53 447.653 228.465C446.459 229.399 445.583 230.302 445.024 231.175C444.504 232.059 444.252 232.94 444.269 233.818C444.324 234.708 444.605 235.635 445.112 236.598C445.62 237.562 446.22 238.31 446.913 238.84C447.644 239.383 448.51 239.668 449.512 239.697C450.551 239.737 451.781 239.506 453.203 239.003C454.637 238.525 456.336 237.734 458.3 236.631L504.402 210.717L509.57 220.532L466.009 245.018C462.941 246.743 460.181 247.966 457.729 248.686C455.277 249.407 453.094 249.763 451.181 249.754C449.267 249.745 447.593 249.437 446.16 248.829C444.74 248.247 443.489 247.503 442.409 246.599C441.366 245.706 440.483 244.723 439.759 243.651C439.035 242.578 438.426 241.573 437.932 240.635C437.438 239.696 436.952 238.622 436.473 237.411C436.009 236.226 435.697 234.939 435.537 233.549C435.403 232.146 435.485 230.67 435.783 229.122C436.081 227.574 436.746 225.967 437.779 224.302C438.811 222.637 440.273 220.944 442.167 219.222C444.098 217.512 446.61 215.788 449.703 214.05L493.263 189.564Z" fill="white"/>
            <path d="M521.541 255.28L523.662 266.723C523.983 268.453 524.259 270.25 524.491 272.115C524.755 274.003 524.804 275.875 524.636 277.731C524.473 279.615 524.014 281.441 523.26 283.207C522.539 284.996 521.356 286.67 519.71 288.231C518.092 289.786 515.933 291.183 513.232 292.423C510.564 293.686 507.198 294.72 503.136 295.524L482.716 299.565C478.653 300.368 475.143 300.696 472.185 300.546C469.231 300.425 466.725 299.951 464.665 299.124C462.605 298.296 460.907 297.192 459.57 295.81C458.265 294.452 457.2 292.928 456.375 291.239C455.555 289.579 454.916 287.823 454.46 285.974C454.036 284.147 453.663 282.368 453.343 280.638L451.221 269.196L521.541 255.28ZM461.236 281.546C461.604 283.531 462.153 285.112 462.884 286.291C463.62 287.498 464.674 288.347 466.045 288.84C467.45 289.356 469.249 289.544 471.442 289.404C473.663 289.258 476.42 288.86 479.714 288.208L501.535 283.89C504.828 283.238 507.519 282.559 509.607 281.851C511.723 281.139 513.328 280.277 514.421 279.267C515.547 278.28 516.236 277.085 516.488 275.683C516.746 274.309 516.69 272.63 516.322 270.645L515.802 267.837L460.716 278.738L461.236 281.546Z" fill="white"/>
            <path d="M528.635 321.267L528.073 332.47L456.571 328.644L457.133 317.441L528.635 321.267Z" fill="white"/>
            <path d="M450.156 359.816C450.484 358.681 450.933 357.479 451.504 356.209C452.048 354.93 452.789 353.727 453.727 352.6C454.665 351.473 455.818 350.457 457.187 349.554C458.575 348.686 460.249 348.041 462.207 347.621C464.158 347.227 466.445 347.134 469.069 347.34C471.719 347.554 474.758 348.189 478.186 349.246L502.489 356.736C505.943 357.8 508.809 358.985 511.086 360.289C513.382 361.63 515.225 363.026 516.614 364.478C518.029 365.939 519.061 367.417 519.708 368.912C520.347 370.435 520.734 371.925 520.867 373.382C521.019 374.876 520.988 376.297 520.773 377.647C520.558 378.997 520.291 380.225 519.972 381.332C519.668 382.384 519.252 383.521 518.724 384.744C518.215 386.003 517.522 387.191 516.646 388.307C515.788 389.459 514.688 390.491 513.346 391.403C512.031 392.323 510.393 392.994 508.435 393.414C506.503 393.844 504.212 393.951 501.561 393.737C498.93 393.558 495.86 392.929 492.352 391.848L468.049 384.358C464.648 383.309 461.799 382.115 459.503 380.775C457.234 379.443 455.378 378.042 453.936 376.573C452.52 375.113 451.47 373.599 450.785 372.032C450.119 370.501 449.679 368.994 449.465 367.512C449.271 366.066 449.263 364.678 449.443 363.347C449.623 362.017 449.861 360.839 450.156 359.816ZM457.99 362.23C457.686 363.281 457.596 364.248 457.721 365.13C457.837 366.04 458.252 366.876 458.965 367.638C459.671 368.428 460.683 369.162 462.004 369.84C463.344 370.554 465.085 371.241 467.227 371.901L498.439 381.521C500.635 382.197 502.509 382.624 504.062 382.802C505.607 383.007 506.897 382.982 507.933 382.729C508.987 382.512 509.817 382.059 510.424 381.373C511.022 380.713 511.474 379.858 511.777 378.807C512.089 377.728 512.173 376.729 512.029 375.811C511.886 374.893 511.435 374.031 510.676 373.225C509.945 372.427 508.882 371.662 507.489 370.932C506.088 370.229 504.29 369.539 502.094 368.862L470.882 359.243C468.739 358.582 466.922 358.158 465.431 357.97C463.959 357.817 462.718 357.872 461.709 358.133C460.701 358.395 459.906 358.873 459.327 359.568C458.747 360.264 458.301 361.151 457.99 362.23Z" fill="white"/>
            </g>
            <path d="M298.193 382.532L295.129 381.848L298.306 366.664C298.442 366.017 298.523 365.472 298.55 365.03C298.577 364.587 298.551 364.222 298.472 363.933C298.384 363.651 298.246 363.43 298.058 363.27C297.861 363.116 297.614 363.005 297.316 362.939C297.019 362.872 296.75 362.867 296.509 362.924C296.258 362.986 296.036 363.127 295.843 363.346C295.64 363.572 295.458 363.891 295.298 364.304C295.13 364.715 294.979 365.244 294.843 365.89L291.667 381.075L288.638 380.398L291.64 366.051C291.851 365.04 292.111 364.192 292.418 363.508C292.725 362.823 293.058 362.267 293.418 361.84C293.778 361.412 294.155 361.095 294.551 360.887C294.939 360.677 295.329 360.536 295.721 360.463C296.104 360.396 296.475 360.381 296.836 360.42C297.196 360.458 297.521 360.509 297.811 360.574C298.101 360.639 298.417 360.73 298.761 360.85C299.097 360.967 299.426 361.138 299.747 361.362C300.067 361.594 300.362 361.888 300.631 362.245C300.901 362.601 301.114 363.051 301.271 363.594C301.428 364.136 301.51 364.781 301.517 365.527C301.515 366.28 301.408 367.166 301.195 368.185L298.193 382.532Z" fill="white"/>
            <path d="M279.006 376.589L276.826 375.279L279.428 360.436L279.365 360.399C279.225 360.697 279.074 361.032 278.911 361.403C278.749 361.775 278.556 362.19 278.335 362.65C278.109 363.117 277.847 363.64 277.55 364.217C277.253 364.794 276.905 365.437 276.507 366.145L272.746 372.828L270.337 371.381L280.648 353.06L282.849 354.382L280.407 368.89L280.49 368.94C280.651 368.606 280.82 368.239 280.999 367.839C281.174 367.446 281.39 366.988 281.648 366.464C281.906 365.939 282.216 365.331 282.577 364.639C282.935 363.955 283.375 363.147 283.898 362.218L286.929 356.833L289.317 358.268L279.006 376.589Z" fill="white"/>
            <path d="M262.231 364.541L260.069 362.061C259.742 361.686 259.417 361.287 259.092 360.866C258.756 360.443 258.476 359.992 258.251 359.511C258.02 359.024 257.871 358.507 257.802 357.958C257.722 357.409 257.772 356.817 257.952 356.183C258.125 355.554 258.454 354.88 258.938 354.163C259.411 353.444 260.088 352.676 260.968 351.856L265.395 347.738C266.275 346.918 267.089 346.301 267.835 345.884C268.577 345.461 269.259 345.194 269.883 345.081C270.507 344.968 271.081 344.979 271.608 345.113C272.122 345.246 272.602 345.456 273.047 345.744C273.486 346.025 273.894 346.358 274.272 346.741C274.638 347.124 274.984 347.503 275.311 347.878L277.473 350.358L262.231 364.541ZM273.246 348.865C272.871 348.435 272.509 348.131 272.161 347.954C271.807 347.771 271.427 347.724 271.02 347.813C270.602 347.902 270.134 348.131 269.616 348.502C269.093 348.878 268.474 349.398 267.76 350.062L263.03 354.463C262.316 355.127 261.754 355.706 261.344 356.199C260.927 356.698 260.658 357.155 260.535 357.57C260.4 357.984 260.403 358.383 260.542 358.765C260.676 359.142 260.931 359.545 261.306 359.975L261.836 360.584L273.776 349.473L273.246 348.865Z" fill="white"/>
            <path d="M250.696 349.008L247.311 341.975L249.505 340.848L251.505 345.003L257 342.18L255.455 338.969L257.648 337.843L259.194 341.054L265.484 337.822L263.431 333.556L265.625 332.429L269.063 339.573L250.696 349.008Z" fill="white"/>
            <path d="M244.563 333.714L243.918 330.291C243.844 329.902 243.78 329.472 243.724 329.003C243.667 328.526 243.657 328.043 243.696 327.555C243.725 327.06 243.82 326.573 243.983 326.094C244.144 325.606 244.405 325.154 244.767 324.735C245.127 324.309 245.61 323.929 246.216 323.596C246.814 323.265 247.569 323.008 248.481 322.825L248.988 322.723C250.52 322.414 251.812 322.39 252.865 322.65C253.909 322.912 254.727 323.442 255.318 324.242L262.74 319.284L263.369 322.621L256.358 326.902L256.581 328.084L264.113 326.567L264.697 329.661L244.563 333.714ZM254.287 328.052C254.183 327.5 254.036 327.045 253.846 326.687C253.656 326.329 253.402 326.06 253.082 325.88C252.755 325.702 252.353 325.606 251.878 325.592C251.394 325.58 250.815 325.642 250.139 325.778L248.547 326.098C248.029 326.202 247.59 326.341 247.231 326.515C246.872 326.688 246.593 326.917 246.394 327.201C246.193 327.478 246.07 327.819 246.024 328.224C245.978 328.629 246.01 329.12 246.118 329.697L246.208 330.172L254.377 328.527L254.287 328.052Z" fill="white"/>
            <path d="M264.458 305.47C264.385 305.792 264.278 306.136 264.137 306.501C264.006 306.86 263.816 307.209 263.566 307.548C263.318 307.879 263.007 308.182 262.632 308.456C262.251 308.72 261.785 308.926 261.234 309.073C260.684 309.211 260.032 309.274 259.279 309.261C258.519 309.238 257.64 309.106 256.643 308.864L249.569 307.148C248.564 306.904 247.725 306.615 247.052 306.282C246.372 305.947 245.82 305.588 245.397 305.205C244.967 304.82 244.646 304.42 244.437 304.003C244.227 303.587 244.09 303.176 244.026 302.769C243.955 302.361 243.937 301.97 243.972 301.596C244.01 301.215 244.064 300.867 244.135 300.553C244.322 299.731 244.591 299.074 244.941 298.581C245.286 298.079 245.69 297.71 246.155 297.474C246.614 297.228 247.116 297.1 247.661 297.087C248.209 297.067 248.771 297.127 249.348 297.267C249.776 297.371 250.168 297.492 250.524 297.629C250.873 297.756 251.256 297.917 251.672 298.111L251.096 300.648L250.079 300.401C248.98 300.135 248.129 300.06 247.527 300.177C246.924 300.295 246.568 300.595 246.458 301.078C246.393 301.368 246.389 301.635 246.449 301.879C246.509 302.123 246.655 302.349 246.887 302.559C247.111 302.766 247.428 302.962 247.839 303.146C248.251 303.323 248.777 303.489 249.416 303.644L258.535 305.856C259.159 306.007 259.683 306.105 260.109 306.149C260.537 306.185 260.891 306.164 261.172 306.088C261.452 306.011 261.672 305.878 261.83 305.687C261.983 305.486 262.095 305.228 262.166 304.914C262.212 304.713 262.213 304.509 262.169 304.303C262.118 304.095 262.014 303.9 261.858 303.718C261.696 303.526 261.48 303.354 261.21 303.204C260.934 303.044 260.598 302.915 260.2 302.819L258.248 302.345L258.898 299.482L260.745 299.93C262.351 300.32 263.45 300.986 264.042 301.928C264.633 302.87 264.772 304.051 264.458 305.47Z" fill="white"/>
            <path d="M268.813 294.115C268.652 294.41 268.452 294.716 268.214 295.034C267.984 295.355 267.703 295.643 267.372 295.896C267.04 296.149 266.656 296.357 266.217 296.52C265.776 296.671 265.269 296.741 264.696 296.73C264.127 296.712 263.482 296.588 262.762 296.358C262.035 296.124 261.225 295.747 260.333 295.227L254.004 291.538C253.105 291.014 252.377 290.495 251.821 289.981C251.262 289.456 250.833 288.945 250.535 288.448C250.229 287.947 250.032 287.466 249.943 287.006C249.858 286.539 249.842 286.097 249.894 285.681C249.944 285.254 250.04 284.859 250.183 284.496C250.326 284.133 250.476 283.807 250.633 283.519C250.783 283.246 250.969 282.955 251.192 282.648C251.412 282.33 251.678 282.044 251.992 281.789C252.302 281.524 252.673 281.308 253.104 281.141C253.528 280.97 254.027 280.891 254.6 280.902C255.166 280.909 255.812 281.029 256.54 281.263C257.264 281.486 258.082 281.863 258.996 282.396L265.324 286.084C266.21 286.6 266.932 287.121 267.491 287.646C268.043 288.167 268.475 288.68 268.788 289.185C269.093 289.686 269.294 290.178 269.389 290.661C269.481 291.132 269.511 291.582 269.479 292.01C269.445 292.427 269.361 292.815 269.229 293.175C269.097 293.535 268.958 293.848 268.813 294.115ZM266.773 292.926C266.923 292.652 267.007 292.388 267.027 292.133C267.05 291.872 266.986 291.611 266.833 291.351C266.685 291.084 266.447 290.813 266.12 290.536C265.79 290.249 265.345 289.943 264.788 289.618L256.66 284.881C256.088 284.547 255.591 284.305 255.168 284.154C254.749 283.995 254.387 283.917 254.083 283.92C253.775 283.911 253.515 283.983 253.303 284.135C253.095 284.28 252.917 284.489 252.767 284.763C252.614 285.044 252.529 285.317 252.512 285.583C252.496 285.849 252.569 286.119 252.731 286.395C252.887 286.666 253.136 286.949 253.481 287.244C253.829 287.533 254.289 287.844 254.861 288.177L262.988 292.914C263.546 293.239 264.027 293.477 264.432 293.627C264.834 293.767 265.184 293.833 265.482 293.826C265.78 293.819 266.031 293.738 266.236 293.582C266.441 293.425 266.62 293.207 266.773 292.926Z" fill="white"/>
            <path d="M259.327 271.1L261.174 269.326L274.162 276.214L274.214 276.164C273.979 275.938 273.713 275.691 273.416 275.423C273.12 275.154 272.791 274.843 272.429 274.49C272.063 274.131 271.655 273.72 271.207 273.259C270.758 272.797 270.264 272.266 269.725 271.666L264.63 266.005L266.671 264.045L280.638 279.566L278.773 281.357L266.048 274.724L265.978 274.792C266.241 275.047 266.531 275.322 266.849 275.615C267.162 275.901 267.524 276.249 267.934 276.656C268.345 277.064 268.818 277.547 269.353 278.106C269.883 278.658 270.503 279.328 271.212 280.116L275.317 284.678L273.294 286.621L259.327 271.1Z" fill="white"/>
            <path d="M281.601 273.746C281.409 273.337 281.254 272.951 281.136 272.587C281.022 272.212 280.918 271.8 280.823 271.351L282.994 270.261L283.429 271.188C283.671 271.701 283.913 272.141 284.156 272.506C284.406 272.868 284.664 273.152 284.93 273.359C285.2 273.555 285.484 273.665 285.781 273.691C286.081 273.706 286.401 273.628 286.739 273.458C287.272 273.191 287.609 272.838 287.75 272.4C287.888 271.954 287.82 271.44 287.547 270.86C287.407 270.562 287.258 270.301 287.1 270.078C286.945 269.843 286.759 269.628 286.543 269.433C286.334 269.234 286.084 269.042 285.792 268.858C285.497 268.665 285.141 268.467 284.724 268.262L280.124 266.143C279.283 265.718 278.56 265.23 277.954 264.679C277.344 264.121 276.854 263.447 276.484 262.658C276.186 262.026 276.007 261.398 275.946 260.776C275.892 260.15 275.956 259.557 276.138 258.997C276.316 258.429 276.619 257.91 277.047 257.437C277.479 256.954 278.029 256.545 278.699 256.209C279.513 255.8 280.246 255.58 280.898 255.547C281.557 255.51 282.14 255.604 282.646 255.829C283.152 256.053 283.583 256.375 283.94 256.793C284.301 257.201 284.595 257.646 284.822 258.13C285.015 258.539 285.16 258.935 285.26 259.317C285.363 259.689 285.473 260.102 285.59 260.559L283.429 261.643L283.004 260.739C282.529 259.727 282.025 259.023 281.492 258.628C280.956 258.226 280.371 258.184 279.737 258.502C279.211 258.766 278.89 259.115 278.774 259.55C278.655 259.978 278.714 260.445 278.952 260.951C279.078 261.219 279.21 261.452 279.347 261.649C279.492 261.843 279.644 262.015 279.803 262.165C279.966 262.304 280.142 262.432 280.331 262.549C280.519 262.666 280.725 262.783 280.95 262.901L286.111 265.332C287.076 265.832 287.89 266.371 288.553 266.948C289.212 267.519 289.734 268.213 290.119 269.032C290.437 269.709 290.62 270.371 290.666 271.019C290.72 271.664 290.645 272.271 290.442 272.842C290.238 273.413 289.915 273.939 289.473 274.418C289.027 274.89 288.466 275.296 287.789 275.635C286.954 276.054 286.204 276.288 285.541 276.335C284.886 276.379 284.303 276.295 283.793 276.081C283.291 275.864 282.858 275.548 282.493 275.133C282.136 274.715 281.839 274.252 281.601 273.746Z" fill="white"/>
            <path d="M293.754 253.644L290.51 254.284L290.051 251.798L299.582 249.917L300.042 252.404L296.81 253.041L300.197 271.372L297.142 271.975L293.754 253.644Z" fill="white"/>
            <path d="M307.961 249.496L311.323 249.795C311.706 249.829 312.123 249.883 312.575 249.956C313.035 250.03 313.487 250.154 313.931 250.326C314.383 250.491 314.81 250.72 315.211 251.013C315.621 251.306 315.97 251.69 316.26 252.165C316.558 252.639 316.779 253.224 316.922 253.917C317.066 254.602 317.098 255.423 317.018 256.379L316.974 256.911C316.84 258.518 316.507 259.808 315.976 260.782C315.446 261.748 314.727 262.415 313.821 262.783L316.396 271.518L313.117 271.226L311.059 263.085L309.899 262.982L309.24 270.881L306.201 270.611L307.961 249.496ZM310.558 260.711C311.1 260.76 311.564 260.739 311.949 260.648C312.335 260.558 312.655 260.379 312.91 260.111C313.166 259.835 313.366 259.463 313.51 258.994C313.654 258.517 313.755 257.924 313.815 257.215L313.954 255.546C313.999 255.002 313.99 254.528 313.927 254.124C313.865 253.72 313.728 253.38 313.518 253.104C313.316 252.828 313.033 252.612 312.668 252.455C312.304 252.298 311.838 252.195 311.272 252.144L310.805 252.103L310.091 260.67L310.558 260.711Z" fill="white"/>
            <path d="M326.875 252.694L329.776 253.921L324.081 268.298C323.839 268.91 323.667 269.432 323.565 269.863C323.464 270.294 323.427 270.658 323.456 270.957C323.496 271.25 323.594 271.493 323.752 271.685C323.92 271.872 324.145 272.025 324.426 272.144C324.708 272.263 324.972 272.317 325.219 272.305C325.476 272.289 325.719 272.19 325.946 272.009C326.184 271.824 326.416 271.542 326.644 271.165C326.879 270.79 327.117 270.297 327.36 269.684L333.055 255.307L335.923 256.519L330.541 270.105C330.162 271.062 329.764 271.849 329.346 272.468C328.928 273.087 328.505 273.574 328.079 273.93C327.652 274.286 327.227 274.531 326.802 274.664C326.385 274.8 325.977 274.869 325.578 274.87C325.19 274.867 324.822 274.814 324.473 274.712C324.125 274.609 323.813 274.499 323.539 274.384C323.265 274.268 322.969 274.12 322.651 273.941C322.34 273.765 322.045 273.537 321.766 273.258C321.49 272.972 321.25 272.629 321.045 272.229C320.84 271.83 320.706 271.349 320.643 270.786C320.581 270.223 320.609 269.574 320.727 268.837C320.856 268.096 321.112 267.244 321.494 266.279L326.875 252.694Z" fill="white"/>
            <path d="M334.835 281.337C334.585 281.13 334.331 280.882 334.073 280.593C333.816 280.316 333.593 279.988 333.405 279.609C333.224 279.235 333.094 278.814 333.016 278.347C332.95 277.877 332.972 277.354 333.082 276.777C333.198 276.205 333.424 275.571 333.761 274.874C334.109 274.176 334.604 273.414 335.246 272.589L339.798 266.738C340.445 265.906 341.059 265.248 341.64 264.765C342.226 264.276 342.778 263.917 343.295 263.688C343.817 263.453 344.305 263.327 344.759 263.312C345.213 263.296 345.631 263.346 346.013 263.462C346.401 263.571 346.75 263.723 347.061 263.918C347.378 264.118 347.658 264.318 347.901 264.521C348.538 265.049 348.996 265.583 349.275 266.122C349.565 266.661 349.712 267.197 349.717 267.732C349.734 268.266 349.629 268.789 349.404 269.303C349.186 269.822 348.891 270.32 348.52 270.797C348.244 271.151 347.969 271.465 347.696 271.736C347.434 272.007 347.128 272.295 346.779 272.599L344.813 270.966L345.468 270.125C346.175 269.216 346.607 268.455 346.765 267.843C346.923 267.231 346.814 266.77 346.44 266.459C346.215 266.272 345.983 266.154 345.745 266.104C345.506 266.055 345.245 266.093 344.962 266.219C344.685 266.338 344.376 266.549 344.038 266.852C343.706 267.16 343.335 267.579 342.923 268.107L337.055 275.651C336.653 276.167 336.342 276.614 336.12 276.992C335.904 277.375 335.769 277.714 335.714 278.008C335.66 278.302 335.682 278.565 335.78 278.795C335.889 279.024 336.066 279.239 336.309 279.441C336.465 279.571 336.643 279.66 336.841 279.708C337.045 279.75 337.26 279.738 337.487 279.671C337.724 279.603 337.967 279.476 338.215 279.289C338.474 279.101 338.732 278.843 338.988 278.514L340.244 276.899L342.463 278.741L341.274 280.269C340.241 281.597 339.185 282.334 338.107 282.478C337.029 282.623 335.938 282.243 334.835 281.337Z" fill="white"/>
            <path d="M356.063 277.002L354.109 274.251L356.084 272.753L361.826 280.835L359.851 282.333L357.904 279.593L343.343 290.635L341.503 288.045L356.063 277.002Z" fill="white"/>
            <path d="M365.213 287.525L366.482 290.459L347.755 299.106L346.486 296.172L365.213 287.525Z" fill="white"/>
            <path d="M350.065 307.929C350.004 307.595 349.966 307.228 349.951 306.827C349.927 306.428 349.964 306.021 350.06 305.607C350.156 305.193 350.321 304.778 350.555 304.362C350.799 303.953 351.144 303.563 351.589 303.191C352.036 302.826 352.607 302.493 353.302 302.19C354.004 301.886 354.859 301.637 355.867 301.442L363.008 300.062C364.024 299.866 364.904 299.78 365.65 299.804C366.405 299.835 367.051 299.941 367.589 300.123C368.135 300.304 368.585 300.541 368.939 300.834C369.295 301.136 369.583 301.463 369.801 301.816C370.03 302.176 370.202 302.543 370.318 302.916C370.435 303.289 370.522 303.638 370.581 303.963C370.637 304.272 370.675 304.618 370.696 305.001C370.726 305.391 370.7 305.787 370.618 306.19C370.545 306.6 370.396 307.012 370.17 307.426C369.951 307.838 369.619 308.231 369.173 308.603C368.735 308.974 368.165 309.311 367.463 309.615C366.77 309.926 365.908 310.181 364.877 310.38L357.735 311.76C356.735 311.954 355.858 312.035 355.103 312.004C354.356 311.972 353.706 311.866 353.152 311.687C352.606 311.506 352.147 311.263 351.774 310.956C351.41 310.656 351.107 310.332 350.864 309.983C350.631 309.641 350.453 309.288 350.331 308.925C350.208 308.562 350.119 308.229 350.065 307.929ZM352.367 307.484C352.423 307.793 352.522 308.051 352.666 308.259C352.811 308.475 353.023 308.632 353.301 308.73C353.581 308.835 353.932 308.885 354.354 308.879C354.786 308.88 355.317 308.82 355.946 308.698L365.119 306.925C365.764 306.8 366.296 306.655 366.714 306.49C367.133 306.334 367.459 306.153 367.691 305.948C367.932 305.75 368.086 305.522 368.154 305.265C368.222 305.016 368.229 304.737 368.173 304.428C368.116 304.111 368.01 303.846 367.858 303.631C367.705 303.417 367.481 303.258 367.185 303.155C366.897 303.051 366.53 303 366.082 303.002C365.636 303.013 365.09 303.08 364.445 303.205L355.273 304.978C354.643 305.1 354.127 305.237 353.723 305.391C353.328 305.552 353.019 305.733 352.795 305.937C352.571 306.14 352.43 306.369 352.37 306.625C352.31 306.88 352.309 307.167 352.367 307.484Z" fill="white"/>
            <path d="M371.655 319.25L371.345 321.835L357.111 325.19L357.102 325.264C357.423 325.28 357.78 325.292 358.174 325.301C358.569 325.31 359.014 325.329 359.511 325.36C360.015 325.391 360.583 325.434 361.213 325.49C361.844 325.546 362.553 325.624 363.339 325.725L370.764 326.675L370.422 329.532L350.065 326.927L350.378 324.316L364.252 320.94L364.263 320.842C363.903 320.821 363.51 320.804 363.084 320.791C362.666 320.779 362.172 320.753 361.604 320.714C361.036 320.675 360.373 320.619 359.616 320.547C358.866 320.476 357.974 320.374 356.941 320.242L350.958 319.477L351.298 316.644L371.655 319.25Z" fill="white"/>
          </svg>
        </div>
        <div>
          <p className="text-white text-lg uppercase tracking-_widest mx-auto text-center text-opacity-50 mt-32 lg:mt-36">
            human centered creative technology & design studio
          </p>
        </div>
      </main>
    </div>
  )
}
