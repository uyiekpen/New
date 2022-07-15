import React from "react";

import {
  Column,
  Stack,
  Image,
  Row,
  Input,
  Button,
  Text,
  Line,
  List,
} from "components";

const RecruiterSettingspasswordresetPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <Column className="bg-gray_50 border-8 border-red_A700 border-solid font-roboto items-center justify-end mx-[auto] py-[1px] w-[100%]">
        <header className="lg:mt-[19px] xl:mt-[22px] mt-[25px] 3xl:mt-[30px] w-[89%]">
          <Stack className="bg-white_A700 lg:h-[46px] xl:h-[53px] h-[59px] 2xl:h-[60px] 3xl:h-[71px] w-[100%]">
            <Stack className="absolute bg-white_A700 lg:h-[46px] xl:h-[53px] h-[59px] 2xl:h-[60px] 3xl:h-[71px] xl:pr-[1096px] pr-[1233px] 3xl:pr-[1480px] lg:pr-[959px] right-[0] w-[100%]">
              <Image
                src={"images/img_logo_7.png"}
                className="absolute lg:h-[46px] xl:h-[53px] h-[59px] 2xl:h-[60px] 3xl:h-[71px] object-contain w-[98%]"
                alt="Logo"
              />
            </Stack>
            <Row className="absolute h-[max-content] inset-y-[0] items-center justify-between my-[auto] w-[40%]">
              <Input
                value={inputvalue}
                onChange={(e) => setInputvalue(e?.target?.value)}
                className="bg-transparent border-0 font-normal p-[0] pl-[0] lg:pr-[27px] xl:pr-[31px] pr-[35px] 3xl:pr-[42px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] placeholder:text-gray_900_7f text-gray_900_7f w-[100%]"
                WrapClassName="3xl:px-[22px] 3xl:py-[19px] bg-gray_200 flex lg:px-[14px] lg:py-[12px] px-[19px] py-[16px] rounded-radius20 w-[50%] xl:px-[16px] xl:py-[14px]"
                name="Frame117"
                placeholder="Search"
                suffix={
                  <Image
                    onClick={() => setInputvalue("")}
                    src={
                      inputvalue?.length
                        ? "images/close7.svg"
                        : "images/img_magnifyingglass_7.png"
                    }
                    className="cursor-pointer w-[24px] h-[24px] lg:w-[18px] lg:h-[19px] xl:w-[21px] xl:h-[22px] 2xl:h-[25px] 3xl:w-[28px] 3xl:h-[29px] my-[auto]"
                    alt="MagnifyingGlass"
                  />
                }
              ></Input>
              <Button className="bg-gray_200 flex lg:h-[30px] xl:h-[34px] h-[38px] 2xl:h-[39px] 3xl:h-[46px] items-center justify-center lg:my-[4px] xl:my-[5px] my-[6px] 3xl:my-[7px] lg:p-[3px] xl:p-[4px] p-[5px] 3xl:p-[6px] rounded-radius1938 lg:w-[29px] xl:w-[33px] w-[38px] 3xl:w-[45px]">
                <Image
                  src={"images/img_group5_10.png"}
                  className="w-[24.77px] h-[24.77px] flex items-center justify-center lg:w-[19px] lg:h-[20px] xl:w-[22px] xl:h-[23px] 2xl:w-[24px] 2xl:h-[25px] 3xl:w-[29px] 3xl:h-[30px]"
                  alt="Group5"
                />
              </Button>
              <Stack className="lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] lg:my-[3px] xl:my-[4px] my-[5px] 3xl:my-[6px] w-[7%]">
                <Button className="absolute bg-gray_200 flex lg:h-[30px] xl:h-[34px] h-[38px] 2xl:h-[39px] 3xl:h-[46px] items-center justify-center lg:p-[3px] xl:p-[4px] p-[5px] 3xl:p-[6px] rounded-radius1938 w-[100%]">
                  <Image
                    src={"images/img_group195.png"}
                    className="w-[24.77px] h-[24.77px] flex items-center justify-center lg:w-[19px] lg:h-[20px] xl:w-[22px] xl:h-[23px] 2xl:w-[24px] 2xl:h-[25px] 3xl:w-[29px] 3xl:h-[30px]"
                    alt="Group195"
                  />
                </Button>
                <Text className="absolute bg-red_A701 font-normal lg:h-[15px] xl:h-[17px] h-[19px] 2xl:h-[20px] 3xl:h-[23px] not-italic lg:pl-[4px] xl:pl-[5px] pl-[6px] 3xl:pl-[7px] lg:pr-[3px] xl:pr-[4px] pr-[5px] 3xl:pr-[6px] xl:py-[1px] lg:py-[1px] py-[2px] rounded-radius969 xl:text-[10px] text-[11.63px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[9px] text-white_A700 w-[auto]">
                  3
                </Text>
              </Stack>
              <Image
                src={"images/img_group117_3.png"}
                className="lg:h-[30px] xl:h-[34px] h-[38px] 2xl:h-[39px] 3xl:h-[46px] lg:my-[4px] xl:my-[5px] my-[6px] 3xl:my-[7px] object-contain w-[14%]"
                alt="Group117"
              />
            </Row>
          </Stack>
        </header>
        <Column className="items-center justify-start mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] w-[100%]">
          <Line className="bg-blue_800 h-[1440px] rotate-[-90deg] w-[100%]" />
          <Row className="items-start justify-between w-[100%]">
            <Column className="bg-gray_50 justify-center outline outline-[0.5px] outline-blue_800 lg:pl-[62px] xl:pl-[71px] pl-[80px] 3xl:pl-[96px] lg:py-[62px] xl:py-[71px] py-[80px] 3xl:py-[96px] w-[18%]">
              <Column className="items-start justify-start lg:ml-[17px] xl:ml-[20px] ml-[23px] 3xl:ml-[27px] lg:mr-[29px] xl:mr-[33px] mr-[38px] 3xl:mr-[45px] xl:mt-[1px] lg:mt-[1px] mt-[2px] w-[65%]">
                <Row className="items-center justify-start xl:ml-[2px] lg:ml-[2px] ml-[3px] w-[78%]">
                  <Image
                    src={"images/img_vector_20.png"}
                    className="lg:h-[14px] xl:h-[16px] h-[17px] 2xl:h-[18px] 3xl:h-[21px] mb-[1px] mt-[0] object-contain lg:w-[13px] xl:w-[15px] w-[17px] 3xl:w-[20px]"
                    alt="Vector"
                  />
                  <Text className="font-normal lg:ml-[21px] xl:ml-[24px] ml-[28px] 3xl:ml-[33px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_900_cc w-[auto]">
                    Home
                  </Text>
                </Row>
                <Row className="items-center justify-start lg:mt-[33px] xl:mt-[38px] mt-[43px] 3xl:mt-[51px] w-[100%]">
                  <Image
                    src={"images/img_suitcasesimple_5.png"}
                    className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                    alt="SuitcaseSimple"
                  />
                  <Text className="font-normal xl:mb-[1px] lg:mb-[1px] mb-[2px] lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] xl:mt-[2px] lg:mt-[2px] mt-[3px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_900_b2 w-[auto]">
                    Interview
                  </Text>
                </Row>
              </Column>
              <Stack className="lg:h-[154px] xl:h-[176px] h-[197px] 2xl:h-[198px] 3xl:h-[237px] lg:mb-[353px] xl:mb-[403px] mb-[454px] 3xl:mb-[545px] lg:mt-[19px] xl:mt-[22px] mt-[25px] 3xl:mt-[30px] w-[100%]">
                <Input
                  className="bg-transparent border-0 font-normal inset-x-[0] not-italic p-[0] lg:pl-[18px] xl:pl-[21px] pl-[24px] 3xl:pl-[28px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] placeholder:text-white_A700 text-white_A700 w-[100%]"
                  WrapClassName="3xl:pl-[27px] 3xl:pr-[42px] 3xl:py-[22px] absolute bg-blue_800 flex lg:pl-[17px] lg:pr-[27px] lg:py-[14px] pl-[23px] pr-[35px] py-[19px] rounded-bl-[20px] rounded-br-[0] rounded-tl-[20px] rounded-tr-[0] w-[100%] xl:pl-[20px] xl:pr-[31px] xl:py-[16px]"
                  name="Group192"
                  placeholder="Settings"
                  prefix={
                    <Image
                      src={"images/img_gear_7.png"}
                      className="w-[24.77px] h-[24.77px] absolute lg:w-[19px] lg:h-[20px] xl:w-[22px] xl:h-[23px] 2xl:w-[24px] 2xl:h-[25px] 3xl:w-[29px] 3xl:h-[30px] my-[auto]"
                      alt="Gear"
                    />
                  }
                ></Input>
                <Column className="absolute bg-white_A700 items-center justify-start lg:pl-[11px] xl:pl-[13px] pl-[15px] 3xl:pl-[18px] lg:py-[11px] xl:py-[13px] py-[15px] 3xl:py-[18px] rounded-bl-[20px] rounded-br-[0] rounded-tl-[0] rounded-tr-[0] shadow-bs w-[100%]">
                  <Text className="font-normal not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_900_cc1 w-[auto]">
                    Update account
                  </Text>
                  <Row className="items-center justify-end lg:mb-[24px] xl:mb-[28px] mb-[32px] 3xl:mb-[38px] ml-[auto] lg:mt-[17px] xl:mt-[19px] mt-[22px] 3xl:mt-[26px] w-[88%]">
                    <Text className="font-normal lg:mb-[10px] xl:mb-[12px] mb-[14px] 3xl:mb-[16px] xl:mt-[10px] mt-[12px] 3xl:mt-[14px] lg:mt-[9px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_900_cc w-[auto]">
                      Change password
                    </Text>
                    <div className="bg-blue_800 lg:h-[35px] xl:h-[41px] h-[45px] 2xl:h-[46px] 3xl:h-[55px] xl:ml-[3px] lg:ml-[3px] ml-[4px] rounded-radius4 w-[6%]"></div>
                  </Row>
                </Column>
              </Stack>
            </Column>
            <Column className="justify-start lg:mb-[192px] xl:mb-[219px] mb-[247px] 3xl:mb-[296px] mt-[1px] w-[82%]">
              <Stack className="lg:h-[192px] xl:h-[219px] h-[246px] 2xl:h-[247px] 3xl:h-[296px] w-[100%]">
                <div className="absolute bg-blue_800_b7 lg:h-[170px] xl:h-[194px] h-[218px] 2xl:h-[219px] 3xl:h-[262px] w-[100%]"></div>
                <Stack className="absolute lg:h-[138px] xl:h-[158px] h-[177px] 2xl:h-[178px] 3xl:h-[213px] left-[3%] w-[15%]">
                  <div className="absolute bg-orange_A700 lg:h-[138px] xl:h-[158px] h-[177px] 2xl:h-[178px] 3xl:h-[213px] outline outline-[2.5px] outline-white_A700 rounded-radius90 w-[100%]"></div>
                  <Button className="absolute bg-white_A700 flex items-center justify-center lg:p-[10px] xl:p-[11px] p-[13px] 3xl:p-[15px] right-[4%] rounded-radius30 shadow-bs3 w-[33%]">
                    <Image
                      src={"images/img_group183.png"}
                      className="w-[32px] h-[32px] flex items-center justify-center lg:w-[24px] lg:h-[25px] xl:w-[28px] xl:h-[29px] 2xl:h-[33px] 3xl:w-[38px] 3xl:h-[39px]"
                      alt="Group183"
                    />
                  </Button>
                </Stack>
                <Button className="absolute bg-white_A700 flex items-center justify-center lg:p-[10px] xl:p-[11px] p-[13px] 3xl:p-[15px] right-[12%] rounded-radius30 shadow-bs3 w-[5%]">
                  <Image
                    src={"images/img_group182.png"}
                    className="w-[32px] h-[32px] flex items-center justify-center lg:w-[24px] lg:h-[25px] xl:w-[28px] xl:h-[29px] 2xl:h-[33px] 3xl:w-[38px] 3xl:h-[39px]"
                    alt="Group182"
                  />
                </Button>
              </Stack>
              <Column className="justify-start lg:ml-[31px] xl:ml-[36px] ml-[41px] 3xl:ml-[49px] lg:mr-[481px] xl:mr-[550px] mr-[619px] 3xl:mr-[743px] lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] w-[44%]">
                <List
                  className="gap-[0] min-h-[auto] w-[100%]"
                  orientation="vertical"
                >
                  <Stack className="3xl:h-[107px] lg:h-[70px] xl:h-[80px] h-[89px] 2xl:h-[90px] lg:mr-[6px] xl:mr-[7px] mr-[8px] 3xl:mr-[9px] xl:my-[10px] my-[12px] 3xl:my-[14px] lg:my-[9px] w-[98%]">
                    <Row className="absolute items-center justify-between outline outline-[0.5px] outline-blue_800 lg:p-[13px] xl:p-[15px] p-[17px] 3xl:p-[20px] rounded-radius35 w-[100%]">
                      <Text className="font-semibold lg:ml-[27px] xl:ml-[31px] ml-[35px] 3xl:ml-[42px] lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-gray_900_cc w-[auto]">
                        John Felix
                      </Text>
                      <Image
                        src={"images/img_pencilsimple_20.png"}
                        className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:mb-[5px] xl:mb-[6px] mb-[7px] 3xl:mb-[8px] 3xl:mr-[10px] lg:mr-[7px] xl:mr-[8px] mr-[9px] lg:mt-[3px] xl:mt-[4px] mt-[5px] 3xl:mt-[6px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                        alt="PencilSimple"
                      />
                    </Row>
                    <Text className="absolute bg-white_A700 font-medium left-[7%] xl:pb-[1px] lg:pb-[1px] pb-[2px] lg:pl-[10px] xl:pl-[12px] pl-[14px] 3xl:pl-[16px] xl:pt-[2px] lg:pt-[2px] pt-[3px] lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-gray_900 w-[auto]">
                      Enter previous password
                    </Text>
                  </Stack>
                  <Stack className="3xl:h-[107px] lg:h-[70px] xl:h-[80px] h-[89px] 2xl:h-[90px] lg:mr-[6px] xl:mr-[7px] mr-[8px] 3xl:mr-[9px] xl:my-[10px] my-[12px] 3xl:my-[14px] lg:my-[9px] w-[98%]">
                    <Row className="absolute items-center justify-between outline outline-[0.5px] outline-blue_800 lg:p-[16px] xl:p-[18px] p-[21px] 3xl:p-[25px] rounded-radius35 w-[100%]">
                      <Text className="font-semibold lg:ml-[21px] xl:ml-[24px] ml-[27px] 3xl:ml-[32px] lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-gray_900_cc w-[auto]">
                        John Felix247@gmail.com
                      </Text>
                      <Image
                        src={"images/img_pencilsimple_21.png"}
                        className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] xl:mb-[2px] lg:mb-[2px] mb-[3px] lg:mr-[3px] xl:mr-[4px] mr-[5px] 3xl:mr-[6px] mt-[1px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                        alt="PencilSimple"
                      />
                    </Row>
                    <Text className="absolute bg-white_A700 font-medium left-[7%] xl:pb-[1px] lg:pb-[1px] pb-[2px] xl:pl-[10px] pl-[12px] 3xl:pl-[14px] lg:pl-[9px] xl:pt-[2px] lg:pt-[2px] pt-[3px] lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-gray_900 w-[auto]">
                      Enter new password
                    </Text>
                  </Stack>
                  <Stack className="3xl:h-[107px] lg:h-[70px] xl:h-[80px] h-[89px] 2xl:h-[90px] lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] xl:my-[10px] my-[12px] 3xl:my-[14px] lg:my-[9px] w-[98%]">
                    <Row className="absolute items-center justify-between outline outline-[0.5px] outline-blue_800 lg:p-[16px] xl:p-[18px] p-[21px] 3xl:p-[25px] rounded-radius35 w-[100%]">
                      <Text className="font-semibold lg:ml-[32px] xl:ml-[37px] ml-[42px] 3xl:ml-[50px] lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-gray_900_cc w-[auto]">
                        9143526566
                      </Text>
                      <Image
                        src={"images/img_pencilsimple_22.png"}
                        className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:mr-[3px] xl:mr-[4px] mr-[5px] 3xl:mr-[6px] xl:my-[1px] lg:my-[1px] my-[2px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                        alt="PencilSimple"
                      />
                    </Row>
                    <Text className="absolute bg-white_A700 font-medium left-[7%] xl:pb-[1px] lg:pb-[1px] pb-[2px] lg:pl-[10px] xl:pl-[11px] pl-[13px] 3xl:pl-[15px] xl:pt-[2px] lg:pt-[2px] pt-[3px] lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-gray_900 w-[auto]">
                      Confirm new password
                    </Text>
                  </Stack>
                </List>
                <Button className="bg-blue_800 font-bold lg:ml-[143px] xl:ml-[164px] ml-[185px] 3xl:ml-[222px] lg:mr-[121px] xl:mr-[138px] mr-[156px] 3xl:mr-[187px] lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] lg:py-[12px] xl:py-[14px] py-[16px] 3xl:py-[19px] rounded-radius10 shadow-bs5 lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-center text-white_A700 w-[34%]">
                  Update
                </Button>
              </Column>
            </Column>
          </Row>
        </Column>
      </Column>
    </>
  );
};

export default RecruiterSettingspasswordresetPage;
