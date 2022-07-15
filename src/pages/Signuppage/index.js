import React from "react";

import {
  Column,
  Image,
  Line,
  Row,
  Text,
  List,
  Stack,
  Button,
} from "components";

const SignuppagePage = () => {
  return (
    <>
      <Column className="bg-gray_50 border-8 border-green_900 border-solid font-roboto justify-start mx-[auto] lg:py-[31px] xl:py-[36px] py-[41px] 3xl:py-[49px] w-[100%]">
        <Image
          src={"images/img_logo_21.png"}
          className="xl:h-[100px] h-[112px] 2xl:h-[113px] 3xl:h-[135px] lg:h-[88px] lg:ml-[62px] xl:ml-[71px] ml-[80px] 3xl:ml-[96px] xl:mr-[1131px] mr-[1272px] 3xl:mr-[1527px] lg:mr-[989px] object-contain w-[6%]"
          alt="Logo"
        />
        <Column className="items-center lg:mb-[13px] xl:mb-[15px] mb-[17px] 3xl:mb-[20px] lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] w-[100%]">
          <Line className="bg-gray_503 h-[1440px] rotate-[-90deg] w-[100%]" />
          <Row className="items-center justify-start lg:mt-[43px] xl:mt-[49px] mt-[56px] 3xl:mt-[67px] w-[85%]">
            <Column className="items-start lg:mb-[28px] xl:mb-[32px] mb-[37px] 3xl:mb-[44px] lg:mt-[40px] xl:mt-[46px] mt-[52px] 3xl:mt-[62px] 3xl:pr-[116px] lg:pr-[75px] xl:pr-[86px] pr-[97px] w-[49%]">
              <Text className="font-bold lg:text-[40px] xl:text-[46px] text-[51.96px] 2xl:text-[51px] 3xl:text-[62px] text-gray_900 w-[auto]">
                Join Talsgrow
              </Text>
              <List
                className="gap-[0] min-h-[auto] lg:mt-[33px] xl:mt-[38px] mt-[43px] 3xl:mt-[51px] w-[100%]"
                orientation="vertical"
              >
                <Stack className="xl:h-[102px] h-[114px] 2xl:h-[115px] 3xl:h-[137px] lg:h-[89px] xl:my-[10px] my-[12px] 3xl:my-[14px] lg:my-[9px] w-[100%]">
                  <Column className="absolute border-2 border-blue_800 border-solid items-start justify-start lg:p-[24px] xl:p-[28px] p-[32px] 3xl:p-[38px] rounded-radius40 w-[100%]">
                    <Text className="font-normal lg:mb-[5px] xl:mb-[6px] mb-[7px] 3xl:mb-[8px] xl:ml-[10px] ml-[12px] 3xl:ml-[14px] lg:ml-[9px] not-italic lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-gray_900_cc w-[auto]">
                      Felix Simon
                    </Text>
                  </Column>
                  <Button className="absolute bg-white_A700 font-medium left-[5%] 3xl:py-[10px] lg:py-[7px] xl:py-[8px] py-[9px] lg:text-[17px] xl:text-[20px] text-[22.78px] 2xl:text-[22px] 3xl:text-[27px] text-center text-gray_800 w-[26%]">
                    Full name
                  </Button>
                </Stack>
                <Stack className="xl:h-[102px] h-[114px] 2xl:h-[115px] 3xl:h-[137px] lg:h-[89px] xl:my-[10px] my-[12px] 3xl:my-[14px] lg:my-[9px] w-[100%]">
                  <Column className="absolute border-2 border-blue_800 border-solid items-start justify-start lg:p-[24px] xl:p-[28px] p-[32px] 3xl:p-[38px] rounded-radius40 w-[100%]">
                    <Text className="font-normal lg:mb-[5px] xl:mb-[6px] mb-[7px] 3xl:mb-[8px] xl:ml-[10px] ml-[12px] 3xl:ml-[14px] lg:ml-[9px] not-italic lg:text-[14px] xl:text-[16px] text-[18px] 3xl:text-[21px] text-gray_900_cc w-[auto]">
                      example247@gmail.com
                    </Text>
                  </Column>
                  <Button className="absolute bg-white_A700 font-medium left-[5%] 3xl:py-[10px] lg:py-[7px] xl:py-[8px] py-[9px] lg:text-[17px] xl:text-[20px] text-[22.78px] 2xl:text-[22px] 3xl:text-[27px] text-center text-gray_800 w-[37%]">
                    Email address
                  </Button>
                </Stack>
              </List>
              <Stack className="xl:h-[105px] h-[117px] 2xl:h-[118px] 3xl:h-[141px] lg:h-[91px] lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] w-[100%]">
                <Row className="absolute border-2 border-blue_800 border-solid items-center justify-between lg:p-[22px] xl:p-[25px] p-[29px] 3xl:p-[34px] rounded-radius40 w-[100%]">
                  <Image
                    src={"images/img_hiddenpassword_1.png"}
                    className="lg:h-[13px] xl:h-[15px] h-[16px] 2xl:h-[17px] 3xl:h-[20px] lg:ml-[10px] xl:ml-[12px] ml-[14px] 3xl:ml-[16px] lg:my-[6px] xl:my-[7px] my-[8px] 3xl:my-[9px] object-contain w-[46%]"
                    alt="Hiddenpassword"
                  />
                  <Image
                    src={"images/img_eyeslash_1.png"}
                    className="lg:h-[25px] xl:h-[29px] h-[32px] 2xl:h-[33px] 3xl:h-[39px] mr-[1px] mt-[0] object-contain lg:w-[24px] xl:w-[28px] w-[32px] 3xl:w-[38px]"
                    alt="EyeSlash"
                  />
                </Row>
                <Button className="absolute bg-white_A700 font-medium left-[5%] 3xl:py-[10px] lg:py-[7px] xl:py-[8px] py-[9px] lg:text-[17px] xl:text-[20px] text-[22.78px] 2xl:text-[22px] 3xl:text-[27px] text-center text-gray_800 w-[29%]">
                  Password
                </Button>
              </Stack>
              <Button className="bg-blue_800 font-bold lg:mt-[43px] xl:mt-[49px] mt-[56px] 3xl:mt-[67px] lg:py-[23px] xl:py-[26px] py-[30px] 3xl:py-[36px] rounded-radius40 lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-center text-white_A700 w-[100%]">
                Sign up
              </Button>
              <Row className="items-center justify-start xl:mt-[10px] mt-[12px] 3xl:mt-[14px] lg:mt-[9px] w-[54%]">
                <Text className="font-medium lg:text-[17px] xl:text-[20px] text-[22.78px] 2xl:text-[22px] 3xl:text-[27px] text-gray_600 w-[auto]">
                  Already a member
                </Text>
                <Text className="font-medium lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] lg:text-[17px] xl:text-[20px] text-[22.78px] 2xl:text-[22px] 3xl:text-[27px] text-deep_orange_400 w-[auto]">
                  Sign in
                </Text>
              </Row>
            </Column>
            <Stack className="lg:h-[599px] xl:h-[685px] h-[769px] 2xl:h-[770px] 3xl:h-[924px] w-[51%]">
              <Stack className="absolute lg:h-[560px] xl:h-[640px] h-[719px] 2xl:h-[720px] 3xl:h-[864px] inset-[0] justify-center m-[auto] w-[96%]">
                <Stack className="absolute lg:h-[560px] xl:h-[640px] h-[719px] 2xl:h-[720px] 3xl:h-[864px] w-[100%]">
                  <Stack className="absolute lg:h-[560px] xl:h-[640px] h-[719px] 2xl:h-[720px] 3xl:h-[864px] w-[100%]">
                    <Stack className="absolute lg:h-[560px] xl:h-[640px] h-[719px] 2xl:h-[720px] 3xl:h-[864px] w-[100%]">
                      <Column className="absolute justify-start w-[100%]">
                        <Stack className="lg:h-[215px] xl:h-[246px] h-[276px] 2xl:h-[277px] 3xl:h-[332px] lg:mr-[58px] xl:mr-[66px] mr-[75px] 3xl:mr-[90px] w-[87%]">
                          <Image
                            src={"images/img_ellipse10.png"}
                            className="absolute lg:h-[175px] xl:h-[201px] h-[225px] 2xl:h-[226px] 3xl:h-[271px] object-contain top-[1%] w-[30%]"
                            alt="Ellipse10"
                          />
                          <Stack className="absolute lg:h-[215px] xl:h-[246px] h-[276px] 2xl:h-[277px] 3xl:h-[332px] w-[77%]">
                            <div className="absolute backdrop-opacity-[0.5] bg-blue_A100_19 blur-[4.00px] lg:h-[215px] xl:h-[246px] h-[276px] 2xl:h-[277px] 3xl:h-[332px] rounded-radius201 w-[100%]"></div>
                            <Image
                              src={"images/img_ellipse17_8.png"}
                              className="absolute lg:h-[125px] xl:h-[143px] h-[160px] 2xl:h-[161px] 3xl:h-[193px] left-[8%] object-contain top-[10%] w-[52%]"
                              alt="Ellipse17"
                            />
                          </Stack>
                        </Stack>
                        <div className="backdrop-opacity-[0.5] bg-blue_A100_19 blur-[4.00px] lg:h-[215px] xl:h-[246px] h-[276px] 2xl:h-[277px] 3xl:h-[332px] lg:ml-[151px] xl:ml-[173px] ml-[195px] 3xl:ml-[234px] xl:mt-[2px] lg:mt-[2px] mt-[3px] rounded-radius201 w-[67%]"></div>
                      </Column>
                      <Image
                        src={"images/img_ellipse20.png"}
                        className="absolute bottom-[4%] lg:h-[125px] xl:h-[143px] h-[160px] 2xl:h-[161px] 3xl:h-[193px] object-contain right-[6%] w-[35%]"
                        alt="Ellipse20"
                      />
                      <Column className="absolute justify-start right-[5%] top-[8%] w-[73%]">
                        <Image
                          src={"images/img_ellipse18_3.png"}
                          className="lg:h-[142px] xl:h-[162px] h-[182px] 2xl:h-[183px] 3xl:h-[219px] lg:ml-[60px] xl:ml-[69px] ml-[78px] 3xl:ml-[93px] lg:mr-[126px] xl:mr-[144px] mr-[162px] 3xl:mr-[194px] object-contain w-[45%]"
                          alt="Ellipse18"
                        />
                        <Row className="items-start justify-between lg:mt-[22px] xl:mt-[25px] mt-[29px] 3xl:mt-[34px] w-[100%]">
                          <Image
                            src={"images/img_ellipse26.png"}
                            className="lg:h-[125px] xl:h-[143px] h-[160px] 2xl:h-[161px] 3xl:h-[193px] lg:mt-[56px] xl:mt-[64px] mt-[73px] 3xl:mt-[87px] object-contain w-[48%]"
                            alt="Ellipse26"
                          />
                          <Image
                            src={"images/img_ellipse25.png"}
                            className="lg:h-[142px] xl:h-[162px] h-[182px] 2xl:h-[183px] 3xl:h-[219px] lg:mb-[39px] xl:mb-[45px] mb-[51px] 3xl:mb-[61px] object-contain w-[45%]"
                            alt="Ellipse25"
                          />
                        </Row>
                      </Column>
                      <Image
                        src={"images/img_ellipse21.png"}
                        className="absolute lg:h-[142px] xl:h-[162px] h-[182px] 2xl:h-[183px] 3xl:h-[219px] left-[8%] object-contain w-[32%]"
                        alt="Ellipse21"
                      />
                    </Stack>
                    <div className="absolute backdrop-opacity-[0.5] bg-blue_A100_19 blur-[4.00px] bottom-[12%] lg:h-[215px] xl:h-[246px] h-[276px] 2xl:h-[277px] 3xl:h-[332px] left-[3%] rounded-radius201 w-[67%]"></div>
                  </Stack>
                  <div className="absolute backdrop-opacity-[0.5] bg-blue_A100_19 blur-[4.00px] lg:h-[215px] xl:h-[246px] h-[276px] 2xl:h-[277px] 3xl:h-[332px] right-[12%] rounded-radius138 top-[13%] w-[41%]"></div>
                </Stack>
                <Image
                  src={"images/img_ellipse23.png"}
                  className="absolute lg:h-[215px] xl:h-[246px] h-[276px] 2xl:h-[277px] 3xl:h-[332px] object-contain right-[3%] top-[18%] w-[55%]"
                  alt="Ellipse23"
                />
              </Stack>
              <Column className="absolute bottom-[6%] justify-start left-[1%] w-[68%]">
                <Image
                  src={"images/img_ellipse22.png"}
                  className="lg:h-[190px] xl:h-[218px] h-[244px] 2xl:h-[245px] 3xl:h-[293px] lg:mr-[117px] xl:mr-[134px] mr-[151px] 3xl:mr-[181px] object-contain w-[64%]"
                  alt="Ellipse22"
                />
                <Image
                  src={"images/img_ellipse19.png"}
                  className="lg:h-[190px] xl:h-[218px] h-[244px] 2xl:h-[245px] 3xl:h-[293px] lg:ml-[117px] xl:ml-[134px] ml-[151px] 3xl:ml-[181px] lg:mt-[32px] xl:mt-[37px] mt-[42px] 3xl:mt-[50px] object-contain w-[64%]"
                  alt="Ellipse19"
                />
              </Column>
              <Column className="absolute bg-gray_900_4f items-start justify-end lg:p-[17px] xl:p-[19px] p-[22px] 3xl:p-[26px] rounded-radius40 w-[100%]">
                <Button
                  className="3xl:ml-[34px] 3xl:mt-[298px] 3xl:pl-[9px] 3xl:pr-[42px] 3xl:py-[34px] bg-white_A700 flex items-center justify-between lg:ml-[22px] lg:mt-[193px] lg:pl-[6px] lg:pr-[27px] lg:py-[22px] ml-[29px] mt-[249px] pl-[8px] pr-[35px] py-[29px] rounded-radius40 shadow-bs1 text-center w-[88%] xl:ml-[25px] xl:mt-[221px] xl:pl-[7px] xl:pr-[31px] xl:py-[25px]"
                  leftIcon={
                    <Image
                      src={"images/img_vector_59.png"}
                      className="w-[24px] h-[24px] bg-blue_800 text-center lg:w-[18px] lg:h-[19px] xl:w-[21px] xl:h-[22px] 2xl:h-[25px] 3xl:w-[28px] 3xl:h-[29px] rounded-radius20"
                      alt="Vector"
                    />
                  }
                >
                  <div className="bg-transparent font-medium lg:text-[19px] xl:text-[22px] text-[25.63px] 2xl:text-[25px] 3xl:text-[30px] text-blue_800">
                    Sign up with Google
                  </div>
                </Button>
                <Button
                  className="3xl:ml-[30px] 3xl:mt-[56px] 3xl:pl-[9px] 3xl:pr-[42px] 3xl:py-[36px] bg-blue_A400 flex items-center justify-between lg:ml-[19px] lg:mt-[36px] lg:pl-[6px] lg:pr-[27px] lg:py-[23px] ml-[25px] mt-[47px] pl-[8px] pr-[35px] py-[30px] rounded-radius40 shadow-bs1 text-center w-[88%] xl:ml-[22px] xl:mt-[41px] xl:pl-[7px] xl:pr-[31px] xl:py-[26px]"
                  leftIcon={
                    <Image
                      src={"images/img_githublogo_1.png"}
                      className="w-[24px] h-[24px] bg-white_A700 text-center lg:w-[18px] lg:h-[19px] xl:w-[21px] xl:h-[22px] 2xl:h-[25px] 3xl:w-[28px] 3xl:h-[29px] rounded-radius20"
                      alt="GithubLogo"
                    />
                  }
                >
                  <div className="bg-transparent font-bold lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-white_A700">
                    Sign up with Github
                  </div>
                </Button>
                <Image
                  src={"images/img_question.png"}
                  className="lg:h-[52px] xl:h-[59px] h-[66px] 2xl:h-[67px] 3xl:h-[80px] lg:mb-[27px] xl:mb-[31px] mb-[35px] 3xl:mb-[42px] lg:ml-[396px] xl:ml-[453px] ml-[510px] 3xl:ml-[612px] lg:mt-[116px] xl:mt-[133px] mt-[150px] 3xl:mt-[180px] object-contain lg:w-[51px] xl:w-[58px] w-[66px] 3xl:w-[79px]"
                  alt="Question"
                />
              </Column>
            </Stack>
          </Row>
        </Column>
      </Column>
    </>
  );
};

export default SignuppagePage;
