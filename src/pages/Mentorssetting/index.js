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

const MentorssettingPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <Column className="bg-gray_50 border-8 border-red_A700 border-solid font-roboto items-center justify-end mx-[auto] lg:pt-[20px] xl:pt-[23px] pt-[26px] 3xl:pt-[31px] w-[100%]">
        <header className="w-[89%]">
          <Stack className="bg-white_A700 lg:h-[46px] xl:h-[53px] h-[59px] 2xl:h-[60px] 3xl:h-[71px] w-[100%]">
            <Stack className="absolute bg-white_A700 lg:h-[46px] xl:h-[53px] h-[59px] 2xl:h-[60px] 3xl:h-[71px] xl:pr-[1096px] pr-[1233px] 3xl:pr-[1480px] lg:pr-[959px] right-[0] w-[100%]">
              <Image
                src={"images/img_logo_5.png"}
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
                        ? "images/close5.svg"
                        : "images/img_magnifyingglass_5.png"
                    }
                    className="cursor-pointer w-[24px] h-[24px] lg:w-[18px] lg:h-[19px] xl:w-[21px] xl:h-[22px] 2xl:h-[25px] 3xl:w-[28px] 3xl:h-[29px] my-[auto]"
                    alt="MagnifyingGlass"
                  />
                }
              ></Input>
              <Button className="bg-gray_200 flex lg:h-[30px] xl:h-[34px] h-[38px] 2xl:h-[39px] 3xl:h-[46px] items-center justify-center lg:my-[4px] xl:my-[5px] my-[6px] 3xl:my-[7px] lg:p-[3px] xl:p-[4px] p-[5px] 3xl:p-[6px] rounded-radius1938 lg:w-[29px] xl:w-[33px] w-[38px] 3xl:w-[45px]">
                <Image
                  src={"images/img_group5_7.png"}
                  className="w-[24.77px] h-[24.77px] flex items-center justify-center lg:w-[19px] lg:h-[20px] xl:w-[22px] xl:h-[23px] 2xl:w-[24px] 2xl:h-[25px] 3xl:w-[29px] 3xl:h-[30px]"
                  alt="Group5"
                />
              </Button>
              <Stack className="lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] lg:my-[3px] xl:my-[4px] my-[5px] 3xl:my-[6px] w-[7%]">
                <Button className="absolute bg-gray_200 flex lg:h-[30px] xl:h-[34px] h-[38px] 2xl:h-[39px] 3xl:h-[46px] items-center justify-center lg:p-[3px] xl:p-[4px] p-[5px] 3xl:p-[6px] rounded-radius1938 w-[100%]">
                  <Image
                    src={"images/img_group148.png"}
                    className="w-[24.77px] h-[24.77px] flex items-center justify-center lg:w-[19px] lg:h-[20px] xl:w-[22px] xl:h-[23px] 2xl:w-[24px] 2xl:h-[25px] 3xl:w-[29px] 3xl:h-[30px]"
                    alt="Group148"
                  />
                </Button>
                <Text className="absolute bg-red_A701 font-normal lg:h-[15px] xl:h-[17px] h-[19px] 2xl:h-[20px] 3xl:h-[23px] not-italic lg:pl-[4px] xl:pl-[5px] pl-[6px] 3xl:pl-[7px] lg:pr-[3px] xl:pr-[4px] pr-[5px] 3xl:pr-[6px] xl:py-[1px] lg:py-[1px] py-[2px] rounded-radius969 xl:text-[10px] text-[11.63px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[9px] text-white_A700 w-[auto]">
                  3
                </Text>
              </Stack>
              <Image
                src={"images/img_group117_2.png"}
                className="lg:h-[30px] xl:h-[34px] h-[38px] 2xl:h-[39px] 3xl:h-[46px] lg:my-[4px] xl:my-[5px] my-[6px] 3xl:my-[7px] object-contain w-[14%]"
                alt="Group117"
              />
            </Row>
          </Stack>
        </header>
        <Stack className="xl:h-[1060px] h-[1191px] 2xl:h-[1192px] 3xl:h-[1431px] lg:h-[927px] lg:mt-[10px] xl:mt-[11px] mt-[13px] 3xl:mt-[15px] w-[100%]">
          <Stack className="absolute xl:h-[1060px] h-[1191px] 2xl:h-[1192px] 3xl:h-[1431px] lg:h-[927px] w-[100%]">
            <Stack className="absolute xl:h-[1060px] h-[1191px] 2xl:h-[1192px] 3xl:h-[1431px] lg:h-[927px] right-[0] w-[100%]">
              <Column className="absolute bg-gray_50 border border-blue_800 border-solid justify-center lg:pl-[62px] xl:pl-[71px] pl-[80px] 3xl:pl-[96px] lg:py-[62px] xl:py-[71px] py-[80px] 3xl:py-[96px] w-[18%]">
                <Column className="items-start justify-start lg:ml-[17px] xl:ml-[20px] ml-[23px] 3xl:ml-[27px] lg:mr-[28px] xl:mr-[32px] mr-[37px] 3xl:mr-[44px] lg:mt-[3px] xl:mt-[4px] mt-[5px] 3xl:mt-[6px] w-[65%]">
                  <Row className="items-center justify-start xl:ml-[2px] lg:ml-[2px] ml-[3px] w-[78%]">
                    <Image
                      src={"images/img_vector_15.png"}
                      className="lg:h-[14px] xl:h-[16px] h-[17px] 2xl:h-[18px] 3xl:h-[21px] mb-[1px] mt-[0] object-contain lg:w-[13px] xl:w-[15px] w-[17px] 3xl:w-[20px]"
                      alt="Vector"
                    />
                    <Text className="font-normal lg:ml-[21px] xl:ml-[24px] ml-[28px] 3xl:ml-[33px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_900_cc w-[auto]">
                      Home
                    </Text>
                  </Row>
                  <Row className="items-center justify-start lg:mt-[21px] xl:mt-[24px] mt-[28px] 3xl:mt-[33px] w-[100%]">
                    <Image
                      src={"images/img_suitcasesimple_3.png"}
                      className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                      alt="SuitcaseSimple"
                    />
                    <Text className="font-normal xl:mb-[1px] lg:mb-[1px] mb-[2px] lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] xl:mt-[2px] lg:mt-[2px] mt-[3px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_900_b2 w-[auto]">
                      Interview
                    </Text>
                  </Row>
                </Column>
                <Stack className="lg:h-[156px] xl:h-[178px] h-[200px] 2xl:h-[201px] 3xl:h-[241px] lg:mb-[567px] xl:mb-[649px] mb-[730px] 3xl:mb-[876px] lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] w-[100%]">
                  <Stack className="absolute lg:h-[156px] xl:h-[178px] h-[200px] 2xl:h-[201px] 3xl:h-[241px] w-[100%]">
                    <Row className="absolute bg-blue_800 items-center justify-start lg:p-[11px] xl:p-[13px] p-[15px] 3xl:p-[18px] rounded-bl-[20px] rounded-br-[0] rounded-tl-[20px] rounded-tr-[0] w-[100%]">
                      <Image
                        src={"images/img_gear_5.png"}
                        className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] xl:mb-[1px] lg:mb-[1px] mb-[2px] lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                        alt="Gear"
                      />
                      <Text className="font-normal lg:mb-[3px] xl:mb-[4px] mb-[5px] 3xl:mb-[6px] lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] xl:mt-[2px] lg:mt-[2px] mt-[3px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-white_A700 w-[auto]">
                        Settings
                      </Text>
                    </Row>
                    <Column className="absolute bg-white_A700 items-center justify-start xl:p-[10px] p-[12px] 3xl:p-[14px] lg:p-[9px] rounded-bl-[20px] rounded-br-[0] rounded-tl-[0] rounded-tr-[0] shadow-bs w-[100%]">
                      <Text className="font-normal xl:mt-[2px] lg:mt-[2px] mt-[3px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_900_cc1 w-[auto]">
                        Update account
                      </Text>
                      <Text className="font-normal lg:mb-[38px] xl:mb-[43px] mb-[49px] 3xl:mb-[58px] lg:mt-[26px] xl:mt-[30px] mt-[34px] 3xl:mt-[40px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_900_cc w-[auto]">
                        Change password
                      </Text>
                    </Column>
                  </Stack>
                  <div className="absolute bg-blue_800 lg:h-[35px] xl:h-[41px] h-[45px] 2xl:h-[46px] 3xl:h-[55px] rounded-radius4 top-[22%] w-[5%]"></div>
                </Stack>
              </Column>
              <Line className="absolute bg-blue_800 h-[1px] 3xl:h-[2px] 2xl:h-[2px] rotate-[-90deg] top-[0] w-[1438px]" />
            </Stack>
            <div className="absolute bg-blue_800_b7 lg:h-[170px] xl:h-[194px] h-[218px] 2xl:h-[219px] 3xl:h-[262px] top-[0] w-[79%]"></div>
          </Stack>
          <Column className="absolute h-[max-content] inset-y-[0] items-center justify-start my-[auto] right-[5%] w-[74%]">
            <Row className="items-end justify-between w-[93%]">
              <Stack className="lg:h-[138px] xl:h-[158px] h-[177px] 2xl:h-[178px] 3xl:h-[213px] w-[18%]">
                <div className="absolute bg-red_A701 border-bw5 border-solid border-white_A700 lg:h-[138px] xl:h-[158px] h-[177px] 2xl:h-[178px] 3xl:h-[213px] rounded-radius90 w-[100%]"></div>
                <Button className="absolute bg-white_A700 flex items-center justify-center lg:p-[10px] xl:p-[11px] p-[13px] 3xl:p-[15px] right-[4%] rounded-radius30 shadow-bs3 w-[33%]">
                  <Image
                    src={"images/img_group119.png"}
                    className="w-[32px] h-[32px] flex items-center justify-center lg:w-[24px] lg:h-[25px] xl:w-[28px] xl:h-[29px] 2xl:h-[33px] 3xl:w-[38px] 3xl:h-[39px]"
                    alt="Group119"
                  />
                </Button>
              </Stack>
              <Button className="bg-white_A700 flex items-center justify-center xl:mt-[104px] mt-[118px] 3xl:mt-[141px] lg:mt-[91px] lg:p-[10px] xl:p-[11px] p-[13px] 3xl:p-[15px] rounded-radius30 shadow-bs3 w-[6%]">
                <Image
                  src={"images/img_group118.png"}
                  className="w-[32px] h-[32px] flex items-center justify-center lg:w-[24px] lg:h-[25px] xl:w-[28px] xl:h-[29px] 2xl:h-[33px] 3xl:w-[38px] 3xl:h-[39px]"
                  alt="Group118"
                />
              </Button>
            </Row>
            <Column className="items-start justify-start lg:mt-[37px] xl:mt-[42px] mt-[48px] 3xl:mt-[57px] w-[100%]">
              <List
                className="gap-[0] min-h-[auto] w-[100%]"
                orientation="vertical"
              >
                <Row className="items-center justify-between xl:my-[10px] my-[12px] 3xl:my-[14px] lg:my-[9px] w-[100%]">
                  <Stack className="3xl:h-[107px] lg:h-[70px] xl:h-[80px] h-[89px] 2xl:h-[90px] w-[48%]">
                    <Row className="absolute items-center justify-between outline outline-[0.5px] outline-blue_800 lg:p-[13px] xl:p-[15px] p-[17px] 3xl:p-[20px] rounded-radius35 w-[100%]">
                      <Text className="font-semibold lg:ml-[22px] xl:ml-[25px] ml-[29px] 3xl:ml-[34px] lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-gray_900_cc w-[auto]">
                        Adam jude
                      </Text>
                      <Image
                        src={"images/img_pencilsimple.png"}
                        className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:mb-[5px] xl:mb-[6px] mb-[7px] 3xl:mb-[8px] 3xl:mr-[10px] lg:mr-[7px] xl:mr-[8px] mr-[9px] lg:mt-[3px] xl:mt-[4px] mt-[5px] 3xl:mt-[6px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                        alt="PencilSimple"
                      />
                    </Row>
                    <Text className="absolute bg-white_A700 font-medium left-[7%] xl:pb-[1px] lg:pb-[1px] pb-[2px] xl:pl-[12px] pl-[14px] 3xl:pl-[16px] xl:pr-[11px] pr-[13px] 3xl:pr-[15px] xl:pt-[2px] lg:pt-[2px] pt-[3px] lg:px-[10px] lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-gray_900 w-[auto]">
                      Name
                    </Text>
                  </Stack>
                  <Stack className="3xl:h-[107px] lg:h-[70px] xl:h-[80px] h-[89px] 2xl:h-[90px] w-[48%]">
                    <Image
                      src={"images/img_pencilsimple_1.png"}
                      className="absolute bottom-[26%] lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] object-contain right-[6%] lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                      alt="PencilSimple"
                    />
                    <Stack className="absolute 3xl:h-[107px] lg:h-[70px] xl:h-[80px] h-[89px] 2xl:h-[90px] w-[100%]">
                      <Column className="absolute items-start justify-start outline outline-[0.5px] outline-blue_800 lg:p-[16px] xl:p-[18px] p-[21px] 3xl:p-[25px] rounded-radius35 w-[100%]">
                        <Text className="font-semibold lg:ml-[21px] xl:ml-[24px] ml-[27px] 3xl:ml-[32px] lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-gray_900_cc w-[auto]">
                          UI/UX DESIGN
                        </Text>
                      </Column>
                      <Text className="absolute bg-white_A700 font-medium left-[7%] xl:pb-[1px] lg:pb-[1px] pb-[2px] xl:pl-[10px] pl-[12px] 3xl:pl-[14px] lg:pl-[9px] lg:pr-[10px] xl:pr-[11px] pr-[13px] 3xl:pr-[15px] xl:pt-[2px] lg:pt-[2px] pt-[3px] lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-gray_900 w-[auto]">
                        Stack
                      </Text>
                    </Stack>
                  </Stack>
                </Row>
                <Row className="items-center justify-between xl:my-[10px] my-[12px] 3xl:my-[14px] lg:my-[9px] w-[100%]">
                  <Stack className="3xl:h-[107px] lg:h-[70px] xl:h-[80px] h-[89px] 2xl:h-[90px] w-[48%]">
                    <Row className="absolute items-center justify-between outline outline-[0.5px] outline-blue_800 lg:p-[16px] xl:p-[18px] p-[21px] 3xl:p-[25px] rounded-radius35 w-[100%]">
                      <Text className="font-semibold lg:ml-[19px] xl:ml-[22px] ml-[25px] 3xl:ml-[30px] lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-gray_900_cc w-[auto]">
                        Jude@gmail.com
                      </Text>
                      <Image
                        src={"images/img_pencilsimple_2.png"}
                        className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] xl:mb-[2px] lg:mb-[2px] mb-[3px] lg:mr-[3px] xl:mr-[4px] mr-[5px] 3xl:mr-[6px] mt-[1px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                        alt="PencilSimple"
                      />
                    </Row>
                    <Text className="absolute bg-white_A700 font-medium left-[7%] xl:pb-[1px] lg:pb-[1px] pb-[2px] xl:pl-[10px] pl-[12px] 3xl:pl-[14px] lg:pl-[9px] pr-[11px] 3xl:pr-[13px] lg:pr-[8px] xl:pr-[9px] xl:pt-[2px] lg:pt-[2px] pt-[3px] lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-gray_900 w-[auto]">
                      Email Address
                    </Text>
                  </Stack>
                  <Stack className="3xl:h-[107px] lg:h-[70px] xl:h-[80px] h-[89px] 2xl:h-[90px] w-[48%]">
                    <Image
                      src={"images/img_pencilsimple_3.png"}
                      className="absolute bottom-[26%] lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] object-contain right-[5%] lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                      alt="PencilSimple"
                    />
                    <Stack className="absolute 3xl:h-[107px] lg:h-[70px] xl:h-[80px] h-[89px] 2xl:h-[90px] w-[100%]">
                      <Column className="absolute items-start justify-start outline outline-[0.5px] outline-blue_800 lg:p-[16px] xl:p-[18px] p-[21px] 3xl:p-[25px] rounded-radius35 w-[100%]">
                        <Text className="font-semibold lg:ml-[21px] xl:ml-[24px] ml-[27px] 3xl:ml-[32px] lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-gray_900_cc w-[auto]">
                          Design, User research
                        </Text>
                      </Column>
                      <Text className="absolute bg-white_A700 font-medium left-[7%] xl:pb-[1px] lg:pb-[1px] pb-[2px] xl:pl-[10px] pl-[12px] 3xl:pl-[14px] lg:pl-[9px] pr-[10px] 3xl:pr-[12px] lg:pr-[7px] xl:pr-[8px] xl:pt-[2px] lg:pt-[2px] pt-[3px] lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-gray_900 w-[auto]">
                        Expertise
                      </Text>
                    </Stack>
                  </Stack>
                </Row>
              </List>
              <Row className="items-start justify-evenly mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[100%]">
                <Column className="items-end justify-start lg:pr-[30px] xl:pr-[34px] pr-[39px] 3xl:pr-[46px] w-[52%]">
                  <Row className="items-start justify-end ml-[auto] mr-[0] w-[45%]">
                    <Text className="font-normal not-italic lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-blue_800_7f w-[auto]">
                      Add email address
                    </Text>
                    <Image
                      src={"images/img_plus_2.png"}
                      className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] mb-[0] lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] xl:mt-[2px] lg:mt-[2px] mt-[3px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                      alt="Plus"
                    />
                  </Row>
                  <Column className="items-center justify-start mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[100%]">
                    <Stack className="3xl:h-[107px] lg:h-[70px] xl:h-[80px] h-[89px] 2xl:h-[90px] w-[100%]">
                      <Image
                        src={"images/img_vector_16.png"}
                        className="absolute bottom-[35%] lg:h-[6px] h-[7px] 2xl:h-[8px] 3xl:h-[9px] object-contain right-[5%] w-[3%]"
                        alt="Vector"
                      />
                      <Stack className="absolute 3xl:h-[107px] lg:h-[70px] xl:h-[80px] h-[89px] 2xl:h-[90px] w-[100%]">
                        <Row className="absolute items-center justify-between outline outline-[0.5px] outline-blue_800 lg:p-[13px] xl:p-[15px] p-[17px] 3xl:p-[20px] rounded-radius35 w-[100%]">
                          <Text className="font-semibold lg:ml-[22px] xl:ml-[25px] ml-[29px] 3xl:ml-[34px] lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-gray_900_cc w-[auto]">
                            Lagos
                          </Text>
                          <Image
                            src={"images/img_group59.png"}
                            className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:mb-[5px] xl:mb-[6px] mb-[7px] 3xl:mb-[8px] lg:mr-[32px] xl:mr-[37px] mr-[42px] 3xl:mr-[50px] lg:mt-[3px] xl:mt-[4px] mt-[5px] 3xl:mt-[6px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                            alt="Group59"
                          />
                        </Row>
                        <Text className="absolute bg-white_A700 font-medium left-[7%] xl:pb-[1px] lg:pb-[1px] pb-[2px] lg:pl-[10px] xl:pl-[11px] pl-[13px] 3xl:pl-[15px] xl:pr-[10px] pr-[12px] 3xl:pr-[14px] lg:pr-[9px] xl:pt-[2px] lg:pt-[2px] pt-[3px] lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-gray_900 w-[auto]">
                          Location
                        </Text>
                      </Stack>
                    </Stack>
                    <Stack className="lg:h-[128px] xl:h-[146px] h-[164px] 2xl:h-[165px] 3xl:h-[197px] lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] w-[100%]">
                      <Row className="absolute items-start justify-start outline outline-[0.5px] outline-blue_800 lg:p-[10px] xl:p-[11px] p-[13px] 3xl:p-[15px] rounded-radius40 w-[100%]">
                        <Text className="font-semibold leading-[normal] lg:ml-[25px] xl:ml-[29px] ml-[33px] 3xl:ml-[39px] lg:mt-[5px] xl:mt-[6px] mt-[7px] 3xl:mt-[8px] lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-gray_900_cc text-left w-[82%]">
                          With over 20 years of experience <br />
                          in software development, has vast <br />
                          knowledge and risen in rank and file <br />
                          at microsoft.....
                        </Text>
                        <Image
                          src={"images/img_pencilsimple_4.png"}
                          className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:mb-[6px] xl:mb-[7px] mb-[8px] 3xl:mb-[9px] lg:ml-[11px] xl:ml-[13px] ml-[15px] 3xl:ml-[18px] 3xl:mt-[104px] lg:mt-[67px] xl:mt-[77px] mt-[87px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                          alt="PencilSimple"
                        />
                      </Row>
                      <Text className="absolute bg-white_A700 font-medium left-[7%] xl:pb-[1px] lg:pb-[1px] pb-[2px] lg:pl-[14px] xl:pl-[16px] pl-[18px] 3xl:pl-[21px] lg:pr-[13px] xl:pr-[15px] pr-[17px] 3xl:pr-[20px] xl:pt-[2px] lg:pt-[2px] pt-[3px] lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-gray_900 w-[auto]">
                        About
                      </Text>
                    </Stack>
                    <Stack className="3xl:h-[107px] lg:h-[70px] xl:h-[80px] h-[89px] 2xl:h-[90px] lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] w-[100%]">
                      <Row className="absolute items-center justify-between outline outline-[0.5px] outline-blue_800 lg:p-[16px] xl:p-[18px] p-[21px] 3xl:p-[25px] rounded-radius35 w-[100%]">
                        <Text className="font-semibold lg:ml-[19px] xl:ml-[22px] ml-[25px] 3xl:ml-[30px] lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-gray_900_cc w-[auto]">
                          9143526566
                        </Text>
                        <Image
                          src={"images/img_pencilsimple_5.png"}
                          className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:mr-[3px] xl:mr-[4px] mr-[5px] 3xl:mr-[6px] xl:my-[1px] lg:my-[1px] my-[2px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                          alt="PencilSimple"
                        />
                      </Row>
                      <Text className="absolute bg-white_A700 font-medium left-[7%] xl:pb-[1px] lg:pb-[1px] pb-[2px] lg:pl-[10px] xl:pl-[11px] pl-[13px] 3xl:pl-[15px] 3xl:pr-[10px] lg:pr-[7px] xl:pr-[8px] pr-[9px] xl:pt-[2px] lg:pt-[2px] pt-[3px] lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-gray_900 w-[auto]">
                        Phone number
                      </Text>
                    </Stack>
                  </Column>
                </Column>
                <List
                  className="gap-[0] 3xl:mb-[118px] lg:mb-[77px] xl:mb-[88px] mb-[99px] min-h-[auto] lg:mt-[10px] xl:mt-[12px] mt-[14px] 3xl:mt-[16px] w-[48%]"
                  orientation="vertical"
                >
                  <Stack className="3xl:h-[107px] lg:h-[70px] xl:h-[80px] h-[89px] 2xl:h-[90px] xl:my-[10px] my-[12px] 3xl:my-[14px] lg:my-[9px] w-[100%]">
                    <Image
                      src={"images/img_pencilsimple_6.png"}
                      className="absolute bottom-[26%] lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] object-contain right-[3%] lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                      alt="PencilSimple"
                    />
                    <Stack className="absolute 3xl:h-[107px] lg:h-[70px] xl:h-[80px] h-[89px] 2xl:h-[90px] w-[100%]">
                      <Column className="absolute items-start justify-start outline outline-[0.5px] outline-blue_800 lg:p-[16px] xl:p-[18px] p-[21px] 3xl:p-[25px] rounded-radius35 w-[100%]">
                        <Text className="font-semibold lg:ml-[21px] xl:ml-[24px] ml-[27px] 3xl:ml-[32px] lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-gray_900_cc w-[auto]">
                          http://
                        </Text>
                      </Column>
                      <Text className="absolute bg-white_A700 font-medium left-[7%] xl:pb-[1px] lg:pb-[1px] pb-[2px] xl:pl-[10px] pl-[12px] 3xl:pl-[14px] lg:pl-[9px] xl:pt-[2px] lg:pt-[2px] pt-[3px] lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-gray_900 w-[auto]">
                        Linkedin profile
                      </Text>
                    </Stack>
                  </Stack>
                  <Stack className="3xl:h-[107px] lg:h-[70px] xl:h-[80px] h-[89px] 2xl:h-[90px] xl:my-[10px] my-[12px] 3xl:my-[14px] lg:my-[9px] w-[100%]">
                    <Image
                      src={"images/img_pencilsimple_7.png"}
                      className="absolute bottom-[26%] lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] object-contain right-[5%] lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                      alt="PencilSimple"
                    />
                    <Stack className="absolute 3xl:h-[107px] lg:h-[70px] xl:h-[80px] h-[89px] 2xl:h-[90px] w-[100%]">
                      <Column className="absolute items-start justify-start outline outline-[0.5px] outline-blue_800 lg:p-[16px] xl:p-[18px] p-[21px] 3xl:p-[25px] rounded-radius35 w-[100%]">
                        <Text className="font-semibold lg:ml-[21px] xl:ml-[24px] ml-[27px] 3xl:ml-[32px] lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-gray_900_cc w-[auto]">
                          http://
                        </Text>
                      </Column>
                      <Text className="absolute bg-white_A700 font-medium left-[7%] xl:pb-[1px] lg:pb-[1px] pb-[2px] xl:pl-[10px] pl-[12px] 3xl:pl-[14px] lg:pl-[9px] xl:pt-[2px] lg:pt-[2px] pt-[3px] lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-gray_900 w-[auto]">
                        Github link
                      </Text>
                    </Stack>
                  </Stack>
                  <Stack className="3xl:h-[107px] lg:h-[70px] xl:h-[80px] h-[89px] 2xl:h-[90px] xl:my-[10px] my-[12px] 3xl:my-[14px] lg:my-[9px] w-[100%]">
                    <Image
                      src={"images/img_pencilsimple_8.png"}
                      className="absolute bottom-[29%] lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] object-contain right-[5%] lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                      alt="PencilSimple"
                    />
                    <Stack className="absolute 3xl:h-[107px] lg:h-[70px] xl:h-[80px] h-[89px] 2xl:h-[90px] w-[100%]">
                      <Column className="absolute items-start justify-start outline outline-[0.5px] outline-blue_800 lg:p-[16px] xl:p-[18px] p-[21px] 3xl:p-[25px] rounded-radius35 w-[100%]">
                        <Text className="font-semibold lg:ml-[21px] xl:ml-[24px] ml-[27px] 3xl:ml-[32px] lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-gray_900_cc w-[auto]">
                          http://
                        </Text>
                      </Column>
                      <Text className="absolute bg-white_A700 font-medium left-[7%] xl:pb-[1px] lg:pb-[1px] pb-[2px] xl:pl-[10px] pl-[12px] 3xl:pl-[14px] lg:pl-[9px] xl:pt-[2px] lg:pt-[2px] pt-[3px] lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-gray_900 w-[auto]">
                        Portfolio/website link
                      </Text>
                    </Stack>
                  </Stack>
                </List>
              </Row>
              <Stack className="3xl:h-[107px] lg:h-[70px] xl:h-[80px] h-[89px] 2xl:h-[90px] ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] w-[48%]">
                <Row className="absolute items-center justify-between outline outline-[0.5px] outline-blue_800 lg:p-[16px] xl:p-[18px] p-[21px] 3xl:p-[25px] rounded-radius35 w-[100%]">
                  <Text className="font-semibold lg:ml-[11px] xl:ml-[13px] ml-[15px] 3xl:ml-[18px] lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-gray_900_cc w-[auto]">
                    English, French
                  </Text>
                  <Image
                    src={"images/img_pencilsimple_9.png"}
                    className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] mb-[1px] lg:mr-[3px] xl:mr-[4px] mr-[5px] 3xl:mr-[6px] xl:mt-[2px] lg:mt-[2px] mt-[3px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                    alt="PencilSimple"
                  />
                </Row>
                <Text className="absolute bg-white_A700 font-medium left-[7%] xl:pb-[1px] lg:pb-[1px] pb-[2px] lg:pl-[10px] xl:pl-[11px] pl-[13px] 3xl:pl-[15px] xl:pt-[2px] lg:pt-[2px] pt-[3px] lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-gray_900 w-[auto]">
                  Languages spoken
                </Text>
              </Stack>
              <Button className="bg-blue_800 font-bold lg:ml-[347px] xl:ml-[397px] ml-[447px] 3xl:ml-[536px] lg:mt-[46px] xl:mt-[53px] mt-[60px] 3xl:mt-[72px] lg:py-[12px] xl:py-[14px] py-[16px] 3xl:py-[19px] rounded-radius10 shadow-bs5 lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-center text-white_A700 w-[17%]">
                Update
              </Button>
            </Column>
          </Column>
        </Stack>
      </Column>
    </>
  );
};

export default MentorssettingPage;
