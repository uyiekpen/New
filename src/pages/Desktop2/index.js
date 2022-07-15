import React from "react";

import { Column, Image, Line, Text, Stack, Row, Button } from "components";

const Desktop2Page = () => {
  return (
    <>
      <Column className="bg-white_A700 border-8 border-green_900 border-solid font-roboto justify-end mx-[auto] lg:pt-[16px] xl:pt-[18px] pt-[21px] 3xl:pt-[25px] w-[100%]">
        <Image
          src={"images/img_logo_9.png"}
          className="xl:h-[100px] h-[112px] 2xl:h-[113px] 3xl:h-[135px] lg:h-[88px] lg:ml-[62px] xl:ml-[71px] ml-[80px] 3xl:ml-[96px] xl:mr-[1131px] mr-[1272px] 3xl:mr-[1527px] lg:mr-[989px] object-contain w-[6%]"
          alt="Logo"
        />
        <Column className="items-center lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] w-[100%]">
          <Line className="bg-gray_503 h-[1440px] rotate-[-90deg] w-[100%]" />
          <Text className="font-bold lg:mt-[51px] xl:mt-[58px] mt-[66px] 3xl:mt-[79px] lg:text-[40px] xl:text-[46px] text-[51.96px] 2xl:text-[51px] 3xl:text-[62px] text-gray_900 w-[auto]">
            We are almost done.......
          </Text>
          <Text className="font-semibold lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] lg:text-[25px] xl:text-[28px] text-[32.44px] 2xl:text-[32px] 3xl:text-[38px] text-gray_600 w-[auto]">
            Fill out the following informtion so we can get to know you more
          </Text>
          <Column className="items-start justify-end lg:mt-[31px] xl:mt-[35px] mt-[40px] 3xl:mt-[48px] w-[89%]">
            <div
              className="lg:h-[10px] xl:h-[11px] h-[12px] 2xl:h-[13px] 3xl:h-[15px] overflow-hidden relative w-[100%]"
              name="Group223"
            >
              <div className="w-full h-full absolute bg-bluegray_101 rounded-[6px]"></div>
              <div
                className="h-full absolute bg-blue_800  rounded-[6px]"
                style={{ width: "30%" }}
              ></div>
            </div>
            <Text className="font-medium xl:ml-[1098px] ml-[1235px] 3xl:ml-[1482px] lg:ml-[960px] lg:mt-[17px] xl:mt-[20px] mt-[23px] 3xl:mt-[27px] lg:text-[17px] xl:text-[20px] text-[22.78px] 2xl:text-[22px] 3xl:text-[27px] text-gray_600 w-[auto]">
              Skip
            </Text>
            <Stack className="3xl:h-[107px] lg:h-[70px] xl:h-[80px] h-[89px] 2xl:h-[90px] lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] w-[40%]">
              <Image
                src={"images/img_vector_23.png"}
                className="absolute bottom-[35%] lg:h-[6px] h-[7px] 2xl:h-[8px] 3xl:h-[9px] object-contain right-[5%] w-[3%]"
                alt="Vector"
              />
              <Stack className="absolute 3xl:h-[107px] lg:h-[70px] xl:h-[80px] h-[89px] 2xl:h-[90px] w-[100%]">
                <Row className="absolute border border-blue_800 border-solid items-center justify-between lg:p-[16px] xl:p-[18px] p-[21px] 3xl:p-[25px] rounded-radius35 w-[100%]">
                  <Text className="font-medium mb-[1px] lg:ml-[32px] xl:ml-[37px] ml-[42px] 3xl:ml-[50px] lg:text-[17px] xl:text-[20px] text-[22.78px] 2xl:text-[22px] 3xl:text-[27px] text-gray_600 w-[auto]">
                    Lagos
                  </Text>
                  <Image
                    src={"images/img_group59_3.png"}
                    className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] xl:mb-[2px] lg:mb-[2px] mb-[3px] lg:mr-[29px] xl:mr-[33px] mr-[38px] 3xl:mr-[45px] mt-[1px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                    alt="Group59"
                  />
                </Row>
                <Text className="absolute bg-white_A700 font-medium left-[7%] lg:pl-[10px] xl:pl-[11px] pl-[13px] 3xl:pl-[15px] lg:pr-[13px] xl:pr-[15px] pr-[17px] 3xl:pr-[20px] xl:py-[2px] lg:py-[2px] py-[3px] lg:text-[17px] xl:text-[20px] text-[22.78px] 2xl:text-[22px] 3xl:text-[27px] text-gray_800 w-[auto]">
                  Location
                </Text>
              </Stack>
            </Stack>
            <Stack className="3xl:h-[107px] lg:h-[70px] xl:h-[80px] h-[89px] 2xl:h-[90px] lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] w-[40%]">
              <Row className="absolute border border-blue_800 border-solid items-center justify-start lg:p-[14px] xl:p-[16px] p-[18px] 3xl:p-[21px] rounded-radius35 w-[100%]">
                <Text className="font-semibold lg:ml-[13px] xl:ml-[15px] ml-[17px] 3xl:ml-[20px] xl:my-[2px] lg:my-[2px] my-[3px] lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-gray_800 w-[auto]">
                  +234
                </Text>
                <Line className="bg-blue_800_cc lg:h-[27px] xl:h-[31px] h-[34px] 2xl:h-[35px] 3xl:h-[41px] lg:ml-[10px] xl:ml-[12px] ml-[14px] 3xl:ml-[16px] w-[2px]" />
                <Text className="font-medium xl:mb-[3px] lg:mb-[3px] mb-[4px] lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] xl:mt-[2px] lg:mt-[2px] mt-[3px] lg:text-[17px] xl:text-[20px] text-[22.78px] 2xl:text-[22px] 3xl:text-[27px] text-gray_600 w-[auto]">
                  9143526566
                </Text>
              </Row>
              <Text className="absolute bg-white_A700 font-medium left-[7%] lg:pl-[10px] xl:pl-[11px] pl-[13px] 3xl:pl-[15px] lg:pr-[12px] xl:pr-[14px] pr-[16px] 3xl:pr-[19px] xl:py-[2px] lg:py-[2px] py-[3px] lg:text-[17px] xl:text-[20px] text-[22.78px] 2xl:text-[22px] 3xl:text-[27px] text-gray_800 w-[auto]">
                Phone number
              </Text>
            </Stack>
            <Button className="bg-blue_800 font-bold lg:mt-[43px] xl:mt-[49px] mt-[56px] 3xl:mt-[67px] lg:py-[12px] xl:py-[14px] py-[16px] 3xl:py-[19px] rounded-radius10 lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-center text-white_A700 w-[15%]">
              Continue
            </Button>
            <Stack className="3xl:h-[107px] lg:h-[70px] xl:h-[80px] h-[89px] 2xl:h-[90px] lg:ml-[42px] xl:ml-[48px] ml-[55px] 3xl:ml-[66px] lg:mt-[226px] xl:mt-[258px] mt-[291px] 3xl:mt-[349px] w-[40%]">
              <Row className="absolute border border-blue_800 border-solid items-center justify-between lg:p-[16px] xl:p-[18px] p-[21px] 3xl:p-[25px] rounded-radius35 w-[100%]">
                <Text className="font-semibold lg:ml-[32px] xl:ml-[37px] ml-[42px] 3xl:ml-[50px] lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-gray_900_cc w-[auto]">
                  English, French
                </Text>
                <Image
                  src={"images/img_pencilsimple_30.png"}
                  className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] mb-[1px] lg:mr-[3px] xl:mr-[4px] mr-[5px] 3xl:mr-[6px] xl:mt-[2px] lg:mt-[2px] mt-[3px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                  alt="PencilSimple"
                />
              </Row>
              <Text className="absolute bg-white_A700 font-medium left-[7%] xl:pb-[1px] lg:pb-[1px] pb-[2px] lg:pl-[10px] xl:pl-[11px] pl-[13px] 3xl:pl-[15px] xl:pt-[2px] lg:pt-[2px] pt-[3px] lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-gray_900 w-[auto]">
                Languages spoken
              </Text>
            </Stack>
          </Column>
        </Column>
      </Column>
    </>
  );
};

export default Desktop2Page;
