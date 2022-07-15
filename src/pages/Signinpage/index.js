import React from "react";

import {
  Column,
  Image,
  Line,
  Row,
  Text,
  Button,
  Stack,
  CheckBox,
} from "components";

const SigninpagePage = () => {
  return (
    <>
      <Column className="bg-gray_50 border-8 border-green_900 border-solid font-roboto justify-end mx-[auto] lg:pt-[25px] xl:pt-[29px] pt-[33px] 3xl:pt-[39px] w-[100%]">
        <Image
          src={"images/img_logo_19.png"}
          className="xl:h-[100px] h-[112px] 2xl:h-[113px] 3xl:h-[135px] lg:h-[88px] lg:ml-[62px] xl:ml-[71px] ml-[80px] 3xl:ml-[96px] xl:mr-[1131px] mr-[1272px] 3xl:mr-[1527px] lg:mr-[989px] object-contain w-[6%]"
          alt="Logo"
        />
        <Column className="items-center lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] w-[100%]">
          <Line className="bg-gray_503 h-[1440px] rotate-[-90deg] w-[100%]" />
          <Row className="items-start justify-start lg:mt-[56px] xl:mt-[64px] mt-[73px] 3xl:mt-[87px] w-[91%]">
            <Column className="items-start justify-start 3xl:pr-[100px] lg:pr-[65px] xl:pr-[74px] pr-[84px] w-[45%]">
              <Text className="font-bold lg:text-[40px] xl:text-[46px] text-[51.96px] 2xl:text-[51px] 3xl:text-[62px] text-gray_900 w-[auto]">
                Welcome Back!
              </Text>
              <Button
                className="3xl:mt-[48px] 3xl:pl-[9px] 3xl:pr-[42px] 3xl:py-[34px] bg-blue_800 flex items-center justify-between lg:mt-[31px] lg:pl-[6px] lg:pr-[27px] lg:py-[22px] mt-[40px] pl-[8px] pr-[35px] py-[29px] rounded-radius40 text-center w-[99%] xl:mt-[35px] xl:pl-[7px] xl:pr-[31px] xl:py-[25px]"
                leftIcon={
                  <Image
                    src={"images/img_vector_53.png"}
                    className="w-[24px] h-[24px] bg-white_A700 text-center lg:w-[18px] lg:h-[19px] xl:w-[21px] xl:h-[22px] 2xl:h-[25px] 3xl:w-[28px] 3xl:h-[29px] rounded-radius20"
                    alt="Vector"
                  />
                }
              >
                <div className="bg-transparent font-medium lg:text-[19px] xl:text-[22px] text-[25.63px] 2xl:text-[25px] 3xl:text-[30px] text-white_A700">
                  Log in with Google
                </div>
              </Button>
              <Button
                className="3xl:mt-[19px] 3xl:pl-[9px] 3xl:pr-[42px] 3xl:py-[34px] bg-blue_A400 flex items-center justify-between lg:ml-[2px] lg:mt-[12px] lg:pl-[6px] lg:pr-[27px] lg:py-[22px] ml-[3px] mt-[16px] pl-[8px] pr-[35px] py-[29px] rounded-radius40 text-center w-[99%] xl:ml-[2px] xl:mt-[14px] xl:pl-[7px] xl:pr-[31px] xl:py-[25px]"
                leftIcon={
                  <Image
                    src={"images/img_githublogo.png"}
                    className="w-[24px] h-[24px] bg-white_A700 text-center lg:w-[18px] lg:h-[19px] xl:w-[21px] xl:h-[22px] 2xl:h-[25px] 3xl:w-[28px] 3xl:h-[29px] rounded-radius20"
                    alt="GithubLogo"
                  />
                }
              >
                <div className="bg-transparent font-medium lg:text-[19px] xl:text-[22px] text-[25.63px] 2xl:text-[25px] 3xl:text-[30px] text-white_A700">
                  Log in with Github
                </div>
              </Button>
              <Stack className="h-[110px] 2xl:h-[111px] 3xl:h-[133px] lg:h-[86px] xl:h-[98px] lg:mt-[31px] xl:mt-[35px] mt-[40px] 3xl:mt-[48px] w-[100%]">
                <Column className="absolute border-2 border-blue_800 border-solid items-start justify-start lg:p-[27px] xl:p-[31px] p-[35px] 3xl:p-[42px] rounded-radius40 w-[100%]">
                  <Text className="font-normal mb-[1px] lg:ml-[3px] xl:ml-[4px] ml-[5px] 3xl:ml-[6px] not-italic lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-gray_600 w-[auto]">
                    example247@gmail.com
                  </Text>
                </Column>
                <Button className="absolute bg-white_A700 font-medium left-[5%] lg:py-[3px] xl:py-[4px] py-[5px] 3xl:py-[6px] lg:text-[17px] xl:text-[20px] text-[22.78px] 2xl:text-[22px] 3xl:text-[27px] text-center text-gray_800 w-[34%]">
                  Email Address
                </Button>
              </Stack>
              <Stack className="h-[107px] 2xl:h-[108px] 3xl:h-[129px] lg:h-[84px] xl:h-[96px] lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] w-[100%]">
                <Row className="absolute border-2 border-blue_800 border-solid items-center justify-between lg:p-[24px] xl:p-[27px] p-[31px] 3xl:p-[37px] rounded-radius40 w-[100%]">
                  <Image
                    src={"images/img_hiddenpassword.png"}
                    className="lg:h-[13px] xl:h-[15px] h-[16px] 2xl:h-[17px] 3xl:h-[20px] lg:ml-[13px] xl:ml-[15px] ml-[17px] 3xl:ml-[20px] lg:my-[4px] xl:my-[5px] my-[6px] 3xl:my-[7px] object-contain w-[42%]"
                    alt="Hiddenpassword"
                  />
                  <Image
                    src={"images/img_eyeslash.png"}
                    className="lg:h-[22px] xl:h-[25px] h-[28px] 2xl:h-[29px] 3xl:h-[34px] xl:mr-[2px] lg:mr-[2px] mr-[3px] mt-[0] object-contain w-[7%]"
                    alt="EyeSlash"
                  />
                </Row>
                <Button className="absolute bg-white_A700 font-medium left-[7%] lg:py-[3px] xl:py-[4px] py-[5px] 3xl:py-[6px] lg:text-[17px] xl:text-[20px] text-[22.78px] 2xl:text-[22px] 3xl:text-[27px] text-center text-gray_800 w-[24%]">
                  Password
                </Button>
              </Stack>
              <Row className="items-center justify-start xl:ml-[2px] lg:ml-[2px] ml-[3px] lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] w-[99%]">
                <CheckBox
                  className="font-medium lg:pl-[6px] xl:pl-[7px] pl-[8px] 3xl:pl-[9px] lg:text-[17px] xl:text-[20px] text-[22.78px] 2xl:text-[22px] 3xl:text-[27px] text-gray_600 w-[36%]"
                  inputClassName="2xl:h-[28px] 3xl:h-[33px] 3xl:w-[32px] border border-gray_900 border-solid h-[27px] lg:h-[21px] lg:w-[21px] rounded-radius5 w-[27px] xl:h-[25px] xl:w-[24px] mr-[5px]"
                  name="Rememberme"
                  label="Remember me"
                ></CheckBox>
                <Text className="font-medium lg:ml-[102px] xl:ml-[117px] ml-[132px] 3xl:ml-[158px] lg:text-[17px] xl:text-[20px] text-[22.78px] 2xl:text-[22px] 3xl:text-[27px] text-deep_orange_400 w-[auto]">
                  Forgot password??
                </Text>
              </Row>
              <Button className="bg-blue_800 font-bold lg:mt-[31px] xl:mt-[35px] mt-[40px] 3xl:mt-[48px] lg:py-[23px] xl:py-[26px] py-[30px] 3xl:py-[36px] rounded-radius40 lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-center text-white_A700 w-[99%]">
                Log in
              </Button>
              <Row className="items-center justify-start lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] w-[77%]">
                <Text className="font-medium lg:text-[17px] xl:text-[20px] text-[22.78px] 2xl:text-[22px] 3xl:text-[27px] text-gray_600 w-[auto]">
                  Want to become a member?
                </Text>
                <Text className="font-medium lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] lg:text-[17px] xl:text-[20px] text-[22.78px] 2xl:text-[22px] 3xl:text-[27px] text-deep_orange_400 w-[auto]">
                  Join now
                </Text>
              </Row>
            </Column>
            <Stack className="lg:h-[551px] xl:h-[630px] h-[708px] 2xl:h-[709px] 3xl:h-[851px] lg:mb-[54px] xl:mb-[62px] mb-[70px] 3xl:mb-[84px] 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] mt-[9px] w-[55%]">
              <Stack className="absolute lg:h-[551px] xl:h-[630px] h-[708px] 2xl:h-[709px] 3xl:h-[851px] right-[5%] w-[82%]">
                <div className="absolute bg-blue_100 lg:h-[504px] xl:h-[576px] h-[647px] 2xl:h-[648px] 3xl:h-[777px] rounded-radius40 w-[96%]"></div>
                <Image
                  src={"images/img_unsplashobjhz.png"}
                  className="absolute lg:h-[532px] xl:h-[609px] h-[684px] 2xl:h-[685px] 3xl:h-[822px] inset-y-[0] my-[auto] object-contain rounded-radius3633 w-[96%]"
                  alt="unsplashObjhz"
                />
              </Stack>
              <Column className="absolute bg-white_A700 bottom-[15%] items-center justify-start lg:p-[17px] xl:p-[19px] p-[22px] 3xl:p-[26px] rounded-radius1536 shadow-bs18 w-[35%]">
                <Text className="font-medium leading-[normal] lg:mb-[14px] xl:mb-[16px] mb-[18px] 3xl:mb-[21px] lg:mt-[13px] xl:mt-[15px] mt-[17px] 3xl:mt-[20px] lg:text-[12px] xl:text-[14px] text-[16.38px] 2xl:text-[16px] 3xl:text-[19px] text-blue_800 text-left w-[100%]">
                  We’ve got a lot prepared just
                  <br />
                  for you!!
                </Text>
              </Column>
              <Column className="absolute bg-deep_orange_400 items-center justify-start left-[0] lg:p-[17px] xl:p-[19px] p-[22px] 3xl:p-[26px] rounded-radius1536 shadow-bs18 top-[4%] w-[35%]">
                <Text className="font-medium leading-[normal] lg:mb-[14px] xl:mb-[16px] mb-[18px] 3xl:mb-[21px] lg:mt-[13px] xl:mt-[15px] mt-[17px] 3xl:mt-[20px] lg:text-[12px] xl:text-[14px] text-[16.38px] 2xl:text-[16px] 3xl:text-[19px] text-left text-white_A700 w-[99%]">
                  Ready to take a step getting
                  <br />
                  closer to your dream job???
                </Text>
              </Column>
              <Column className="absolute bg-green_800 bottom-[17%] items-center justify-start lg:p-[19px] xl:p-[22px] p-[25px] 3xl:p-[30px] rounded-radius1536 shadow-bs18 w-[35%]">
                <Text className="font-medium leading-[normal] lg:mb-[4px] xl:mb-[5px] mb-[6px] 3xl:mb-[7px] xl:mt-[3px] lg:mt-[3px] mt-[4px] lg:text-[12px] xl:text-[14px] text-[16.38px] 2xl:text-[16px] 3xl:text-[19px] text-left text-white_A700 w-[99%]">
                  We breed the best talent in <br />
                  the tech space with <br />
                  outstanding mentorship
                </Text>
              </Column>
            </Stack>
          </Row>
        </Column>
        <Column className="items-end lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] 3xl:px-[103px] lg:px-[66px] xl:px-[76px] px-[86px] w-[100%]">
          <Image
            src={"images/img_vector_54.png"}
            className="lg:h-[45px] xl:h-[51px] h-[57px] 2xl:h-[58px] 3xl:h-[69px] object-contain w-[5%]"
            alt="Vector"
          />
        </Column>
        <Line className="bg-gray_503 lg:h-[467px] xl:h-[534px] h-[600px] 2xl:h-[601px] 3xl:h-[721px] lg:ml-[512px] xl:ml-[586px] ml-[659px] 3xl:ml-[791px] lg:mr-[605px] xl:mr-[692px] mr-[779px] 3xl:mr-[935px] lg:mt-[220px] xl:mt-[251px] mt-[283px] 3xl:mt-[339px] w-[2px]" />
      </Column>
    </>
  );
};

export default SigninpagePage;
