import React from "react";

import {
  Column,
  Row,
  Image,
  Input,
  Button,
  Stack,
  Text,
  Line,
  List,
} from "components";

const SettingsChangepasswordPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <Column className="bg-gray_50 border-8 border-red_A700 border-solid font-roboto items-center justify-end mx-[auto] lg:pt-[20px] xl:pt-[23px] pt-[26px] 3xl:pt-[31px] w-[100%]">
        <header className="w-[89%]">
          <Row className="bg-white_A700 items-center justify-start xl:pr-[3px] lg:pr-[3px] pr-[4px] w-[100%]">
            <Image
              src={"images/img_logo_12.png"}
              className="lg:h-[46px] xl:h-[53px] h-[59px] 2xl:h-[60px] 3xl:h-[71px] object-contain w-[4%]"
              alt="Logo"
            />
            <Input
              value={inputvalue}
              onChange={(e) => setInputvalue(e?.target?.value)}
              className="bg-transparent border-0 font-normal p-[0] pl-[0] lg:pr-[27px] xl:pr-[31px] pr-[35px] 3xl:pr-[42px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] placeholder:text-gray_900_7f text-gray_900_7f w-[100%]"
              WrapClassName="3xl:ml-[869px] 3xl:px-[22px] 3xl:py-[19px] bg-gray_200 flex lg:ml-[563px] lg:my-[2px] lg:px-[14px] lg:py-[12px] ml-[724px] my-[3px] px-[19px] py-[16px] rounded-radius20 w-[20%] xl:ml-[644px] xl:my-[2px] xl:px-[16px] xl:py-[14px]"
              name="Frame117"
              placeholder="Search"
              suffix={
                <Image
                  onClick={() => setInputvalue("")}
                  src={
                    inputvalue?.length
                      ? "images/close11.svg"
                      : "images/img_magnifyingglass_12.png"
                  }
                  className="cursor-pointer w-[24px] h-[24px] lg:w-[18px] lg:h-[19px] xl:w-[21px] xl:h-[22px] 2xl:h-[25px] 3xl:w-[28px] 3xl:h-[29px] my-[auto]"
                  alt="MagnifyingGlass"
                />
              }
            ></Input>
            <Button className="bg-gray_200 flex lg:h-[30px] xl:h-[34px] h-[38px] 2xl:h-[39px] 3xl:h-[46px] items-center justify-center lg:ml-[35px] xl:ml-[40px] ml-[45px] 3xl:ml-[54px] my-[10px] 3xl:my-[12px] lg:my-[7px] xl:my-[8px] lg:p-[3px] xl:p-[4px] p-[5px] 3xl:p-[6px] rounded-radius1938 lg:w-[29px] xl:w-[33px] w-[38px] 3xl:w-[45px]">
              <Image
                src={"images/img_group5_14.png"}
                className="w-[24.77px] h-[24.77px] flex items-center justify-center lg:w-[19px] lg:h-[20px] xl:w-[22px] xl:h-[23px] 2xl:w-[24px] 2xl:h-[25px] 3xl:w-[29px] 3xl:h-[30px]"
                alt="Group5"
              />
            </Button>
            <Stack className="lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] lg:ml-[24px] xl:ml-[28px] ml-[32px] 3xl:ml-[38px] 3xl:my-[10px] lg:my-[7px] xl:my-[8px] my-[9px] w-[3%]">
              <Button className="absolute bg-gray_200 flex lg:h-[30px] xl:h-[34px] h-[38px] 2xl:h-[39px] 3xl:h-[46px] items-center justify-center lg:p-[3px] xl:p-[4px] p-[5px] 3xl:p-[6px] rounded-radius1938 w-[100%]">
                <Image
                  src={"images/img_group262.png"}
                  className="w-[24.77px] h-[24.77px] flex items-center justify-center lg:w-[19px] lg:h-[20px] xl:w-[22px] xl:h-[23px] 2xl:w-[24px] 2xl:h-[25px] 3xl:w-[29px] 3xl:h-[30px]"
                  alt="Group262"
                />
              </Button>
              <Text className="absolute bg-red_A701 font-normal lg:h-[15px] xl:h-[17px] h-[19px] 2xl:h-[20px] 3xl:h-[23px] not-italic lg:pl-[4px] xl:pl-[5px] pl-[6px] 3xl:pl-[7px] lg:pr-[3px] xl:pr-[4px] pr-[5px] 3xl:pr-[6px] xl:py-[1px] lg:py-[1px] py-[2px] rounded-radius969 xl:text-[10px] text-[11.63px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[9px] text-white_A700 w-[auto]">
                3
              </Text>
            </Stack>
            <Image
              src={"images/img_ellipse17_6.png"}
              className="lg:h-[30px] xl:h-[34px] h-[38px] 2xl:h-[39px] 3xl:h-[46px] lg:ml-[24px] xl:ml-[28px] ml-[32px] 3xl:ml-[38px] my-[10px] 3xl:my-[12px] lg:my-[7px] xl:my-[8px] object-contain rounded-radius50 w-[auto]"
              alt="Ellipse17"
            />
            <Image
              src={"images/img_vector_30.png"}
              className="lg:h-[6px] h-[7px] 2xl:h-[8px] 3xl:h-[9px] lg:mb-[19px] xl:mb-[22px] mb-[25px] 3xl:mb-[30px] ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] lg:mt-[20px] xl:mt-[23px] mt-[26px] 3xl:mt-[31px] object-contain w-[1%]"
              alt="Vector"
            />
          </Row>
        </header>
        <Stack className="3xl:h-[1112px] lg:h-[721px] xl:h-[824px] h-[926px] 2xl:h-[927px] xl:mt-[10px] mt-[12px] 3xl:mt-[14px] lg:mt-[9px] w-[100%]">
          <Stack className="absolute 3xl:h-[1112px] lg:h-[721px] xl:h-[824px] h-[926px] 2xl:h-[927px] w-[100%]">
            <Line className="absolute bg-blue_800 h-[1440px] rotate-[-90deg] top-[1%] w-[100%]" />
            <Column className="absolute bg-white_A700 items-center justify-center left-[0] lg:pl-[59px] xl:pl-[68px] pl-[77px] 3xl:pl-[92px] lg:py-[59px] xl:py-[68px] py-[77px] 3xl:py-[92px] shadow-bs2 w-[17%]">
              <Column className="items-start justify-start lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] w-[75%]">
                <Row className="items-center justify-start xl:ml-[2px] lg:ml-[2px] ml-[3px] w-[67%]">
                  <Image
                    src={"images/img_vector_31.png"}
                    className="lg:h-[14px] xl:h-[16px] h-[17px] 2xl:h-[18px] 3xl:h-[21px] mb-[1px] mt-[0] object-contain lg:w-[13px] xl:w-[15px] w-[17px] 3xl:w-[20px]"
                    alt="Vector"
                  />
                  <Text className="font-bold lg:ml-[21px] xl:ml-[24px] ml-[27px] 3xl:ml-[32px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_900_cc w-[auto]">
                    Home
                  </Text>
                </Row>
                <Row className="items-center justify-start lg:mt-[31px] xl:mt-[36px] mt-[41px] 3xl:mt-[49px] w-[77%]">
                  <Image
                    src={"images/img_chalkboardteach_5.png"}
                    className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                    alt="ChalkboardTeach"
                  />
                  <Text className="font-bold xl:mb-[1px] lg:mb-[1px] mb-[2px] lg:ml-[17px] xl:ml-[20px] ml-[23px] 3xl:ml-[27px] xl:mt-[2px] lg:mt-[2px] mt-[3px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_900_b2 w-[auto]">
                    Mentor
                  </Text>
                </Row>
                <Row className="items-center justify-start ml-[0] lg:mt-[32px] xl:mt-[37px] mt-[42px] 3xl:mt-[50px] w-[61%]">
                  <Image
                    src={"images/img_bookopen_5.png"}
                    className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                    alt="BookOpen"
                  />
                  <Text className="font-bold xl:mb-[1px] lg:mb-[1px] mb-[2px] lg:ml-[17px] xl:ml-[20px] ml-[23px] 3xl:ml-[27px] xl:mt-[2px] lg:mt-[2px] mt-[3px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_900_b2 w-[auto]">
                    Test
                  </Text>
                </Row>
                <Row className="items-center justify-start ml-[0] lg:mt-[31px] xl:mt-[35px] mt-[40px] 3xl:mt-[48px] w-[82%]">
                  <Image
                    src={"images/img_notebook_6.png"}
                    className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                    alt="Notebook"
                  />
                  <Text className="font-bold xl:mb-[1px] lg:mb-[1px] mb-[2px] lg:ml-[17px] xl:ml-[20px] ml-[23px] 3xl:ml-[27px] xl:mt-[2px] lg:mt-[2px] mt-[3px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_900_b2 w-[auto]">
                    Resume
                  </Text>
                </Row>
                <Row className="items-center justify-start ml-[0] lg:mt-[31px] xl:mt-[35px] mt-[40px] 3xl:mt-[48px] w-[88%]">
                  <Image
                    src={"images/img_suitcasesimple_9.png"}
                    className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                    alt="SuitcaseSimple"
                  />
                  <Text className="font-bold xl:mb-[1px] lg:mb-[1px] mb-[2px] lg:ml-[17px] xl:ml-[20px] ml-[23px] 3xl:ml-[27px] xl:mt-[2px] lg:mt-[2px] mt-[3px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_900_b2 w-[auto]">
                    Interview
                  </Text>
                </Row>
                <Row className="items-center justify-start lg:mt-[31px] xl:mt-[35px] mt-[40px] 3xl:mt-[48px] w-[100%]">
                  <Image
                    src={"images/img_usersthree_8.png"}
                    className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                    alt="UsersThree"
                  />
                  <Text className="font-bold xl:mb-[1px] lg:mb-[1px] mb-[2px] lg:ml-[17px] xl:ml-[20px] ml-[23px] 3xl:ml-[27px] xl:mt-[2px] lg:mt-[2px] mt-[3px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_900_b2 w-[auto]">
                    Community
                  </Text>
                </Row>
              </Column>
              <Column className="items-center justify-start lg:mb-[146px] xl:mb-[167px] mb-[188px] 3xl:mb-[225px] lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] w-[100%]">
                <Input
                  className="bg-transparent border-0 font-bold p-[0] lg:pl-[17px] xl:pl-[20px] pl-[23px] 3xl:pl-[27px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] placeholder:text-white_A700 text-white_A700 w-[100%]"
                  WrapClassName="3xl:pb-[21px] 3xl:pl-[28px] 3xl:pr-[42px] 3xl:pt-[24px] bg-blue_800 flex lg:pb-[14px] lg:pl-[18px] lg:pr-[27px] lg:pt-[15px] pb-[18px] pl-[24px] pr-[35px] pt-[20px] rounded-bl-[0] rounded-br-[0] rounded-tl-[20px] rounded-tr-[0] w-[100%] xl:pb-[16px] xl:pl-[21px] xl:pr-[31px] xl:pt-[17px]"
                  name="Group252"
                  placeholder="Settings"
                  prefix={
                    <Image
                      src={"images/img_gear_11.png"}
                      className="w-[24.77px] h-[24.77px] lg:w-[19px] lg:h-[20px] xl:w-[22px] xl:h-[23px] 2xl:w-[24px] 2xl:h-[25px] 3xl:w-[29px] 3xl:h-[30px] my-[auto]"
                      alt="Gear"
                    />
                  }
                ></Input>
                <Column className="bg-white_A700 items-start justify-start p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[8px] rounded-bl-[20px] rounded-br-[0] rounded-tl-[0] rounded-tr-[0] shadow-bs w-[100%]">
                  <Text className="font-bold lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] lg:mt-[3px] xl:mt-[4px] mt-[5px] 3xl:mt-[6px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_900_cc1 w-[auto]">
                    Update account
                  </Text>
                  <Text className="font-bold lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] lg:mt-[17px] xl:mt-[20px] mt-[23px] 3xl:mt-[27px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_900_cc w-[auto]">
                    My wallet
                  </Text>
                  <Text className="font-bold lg:mb-[6px] xl:mb-[7px] mb-[8px] 3xl:mb-[9px] lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] lg:mt-[27px] xl:mt-[31px] mt-[35px] 3xl:mt-[42px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_900_cc w-[auto]">
                    Change password
                  </Text>
                </Column>
              </Column>
            </Column>
          </Stack>
          <Row className="absolute items-start justify-center right-[0] top-[1%] w-[83%]">
            <div className="bg-blue_800 lg:h-[35px] xl:h-[41px] h-[45px] 2xl:h-[46px] 3xl:h-[55px] lg:mb-[44px] xl:mb-[50px] mb-[57px] 3xl:mb-[68px] lg:mt-[470px] xl:mt-[538px] mt-[605px] 3xl:mt-[726px] rounded-radius4 w-[1%]"></div>
            <Column className="justify-start w-[99%]">
              <Stack className="lg:h-[192px] xl:h-[219px] h-[246px] 2xl:h-[247px] 3xl:h-[296px] w-[100%]">
                <div className="absolute bg-blue_800_b7 lg:h-[170px] xl:h-[194px] h-[218px] 2xl:h-[219px] 3xl:h-[262px] w-[100%]"></div>
                <Stack className="absolute lg:h-[138px] xl:h-[158px] h-[177px] 2xl:h-[178px] 3xl:h-[213px] left-[3%] w-[15%]">
                  <Image
                    src={"images/img_ellipse64_2.png"}
                    className="absolute lg:h-[138px] xl:h-[158px] h-[177px] 2xl:h-[178px] 3xl:h-[213px] object-cover rounded-radius50 w-[100%]"
                    alt="Ellipse64"
                  />
                  <Button className="absolute bg-white_A700 bottom-[0] flex items-center justify-center lg:p-[10px] xl:p-[11px] p-[13px] 3xl:p-[15px] right-[4%] rounded-radius30 shadow-bs3 w-[33%]">
                    <Image
                      src={"images/img_group260.png"}
                      className="w-[32px] h-[32px] flex items-center justify-center lg:w-[24px] lg:h-[25px] xl:w-[28px] xl:h-[29px] 2xl:h-[33px] 3xl:w-[38px] 3xl:h-[39px]"
                      alt="Group260"
                    />
                  </Button>
                </Stack>
                <Button className="absolute bg-white_A700 bottom-[0] flex items-center justify-center lg:p-[10px] xl:p-[11px] p-[13px] 3xl:p-[15px] right-[13%] rounded-radius30 shadow-bs3 w-[5%]">
                  <Image
                    src={"images/img_group259.png"}
                    className="w-[32px] h-[32px] flex items-center justify-center lg:w-[24px] lg:h-[25px] xl:w-[28px] xl:h-[29px] 2xl:h-[33px] 3xl:w-[38px] 3xl:h-[39px]"
                    alt="Group259"
                  />
                </Button>
              </Stack>
              <Column className="justify-start lg:ml-[31px] xl:ml-[36px] ml-[41px] 3xl:ml-[49px] lg:mr-[486px] xl:mr-[555px] mr-[625px] 3xl:mr-[750px] lg:mt-[35px] xl:mt-[40px] mt-[45px] 3xl:mt-[54px] w-[44%]">
                <List
                  className="gap-[0] min-h-[auto] w-[100%]"
                  orientation="vertical"
                >
                  <Stack className="3xl:h-[107px] lg:h-[70px] xl:h-[80px] h-[89px] 2xl:h-[90px] xl:mr-[3px] lg:mr-[3px] mr-[4px] xl:my-[10px] my-[12px] 3xl:my-[14px] lg:my-[9px] w-[99%]">
                    <Row className="absolute items-center justify-between outline outline-[0.5px] outline-blue_800 lg:p-[13px] xl:p-[15px] p-[17px] 3xl:p-[20px] rounded-radius35 w-[100%]">
                      <Text className="font-semibold lg:ml-[27px] xl:ml-[31px] ml-[35px] 3xl:ml-[42px] lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-gray_900_cc w-[auto]">
                        John Felix
                      </Text>
                      <Image
                        src={"images/img_pencilsimple_31.png"}
                        className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:mb-[5px] xl:mb-[6px] mb-[7px] 3xl:mb-[8px] 3xl:mr-[10px] lg:mr-[7px] xl:mr-[8px] mr-[9px] lg:mt-[3px] xl:mt-[4px] mt-[5px] 3xl:mt-[6px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                        alt="PencilSimple"
                      />
                    </Row>
                    <Text className="absolute bg-white_A700 font-medium left-[7%] xl:pb-[1px] lg:pb-[1px] pb-[2px] lg:pl-[10px] xl:pl-[12px] pl-[14px] 3xl:pl-[16px] xl:pt-[2px] lg:pt-[2px] pt-[3px] lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-gray_900 w-[auto]">
                      Enter previous password
                    </Text>
                  </Stack>
                  <Stack className="3xl:h-[107px] lg:h-[70px] xl:h-[80px] h-[89px] 2xl:h-[90px] xl:mr-[3px] lg:mr-[3px] mr-[4px] xl:my-[10px] my-[12px] 3xl:my-[14px] lg:my-[9px] w-[99%]">
                    <Row className="absolute items-center justify-between outline outline-[0.5px] outline-blue_800 lg:p-[16px] xl:p-[18px] p-[21px] 3xl:p-[25px] rounded-radius35 w-[100%]">
                      <Text className="font-semibold lg:ml-[21px] xl:ml-[24px] ml-[27px] 3xl:ml-[32px] lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-gray_900_cc w-[auto]">
                        John Felix247@gmail.com
                      </Text>
                      <Image
                        src={"images/img_pencilsimple_32.png"}
                        className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] xl:mb-[2px] lg:mb-[2px] mb-[3px] lg:mr-[3px] xl:mr-[4px] mr-[5px] 3xl:mr-[6px] mt-[1px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                        alt="PencilSimple"
                      />
                    </Row>
                    <Text className="absolute bg-white_A700 font-medium left-[7%] xl:pb-[1px] lg:pb-[1px] pb-[2px] xl:pl-[10px] pl-[12px] 3xl:pl-[14px] lg:pl-[9px] xl:pt-[2px] lg:pt-[2px] pt-[3px] lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-gray_900 w-[auto]">
                      Enter new password
                    </Text>
                  </Stack>
                  <Stack className="3xl:h-[107px] lg:h-[70px] xl:h-[80px] h-[89px] 2xl:h-[90px] xl:ml-[3px] lg:ml-[3px] ml-[4px] xl:my-[10px] my-[12px] 3xl:my-[14px] lg:my-[9px] w-[99%]">
                    <Row className="absolute items-center justify-between outline outline-[0.5px] outline-blue_800 lg:p-[16px] xl:p-[18px] p-[21px] 3xl:p-[25px] rounded-radius35 w-[100%]">
                      <Text className="font-semibold lg:ml-[32px] xl:ml-[37px] ml-[42px] 3xl:ml-[50px] lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-gray_900_cc w-[auto]">
                        9143526566
                      </Text>
                      <Image
                        src={"images/img_pencilsimple_33.png"}
                        className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:mr-[3px] xl:mr-[4px] mr-[5px] 3xl:mr-[6px] xl:my-[1px] lg:my-[1px] my-[2px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                        alt="PencilSimple"
                      />
                    </Row>
                    <Text className="absolute bg-white_A700 font-medium left-[7%] xl:pb-[1px] lg:pb-[1px] pb-[2px] lg:pl-[10px] xl:pl-[11px] pl-[13px] 3xl:pl-[15px] xl:pt-[2px] lg:pt-[2px] pt-[3px] lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-gray_900 w-[auto]">
                      Confirm new password
                    </Text>
                  </Stack>
                </List>
                <Button className="bg-blue_800 font-bold lg:ml-[143px] xl:ml-[164px] ml-[185px] 3xl:ml-[222px] lg:mr-[118px] xl:mr-[135px] mr-[152px] 3xl:mr-[182px] lg:mt-[31px] xl:mt-[35px] mt-[40px] 3xl:mt-[48px] lg:py-[12px] xl:py-[14px] py-[16px] 3xl:py-[19px] rounded-radius10 shadow-bs5 lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-center text-white_A700 w-[34%]">
                  Update
                </Button>
              </Column>
            </Column>
          </Row>
        </Stack>
      </Column>
    </>
  );
};

export default SettingsChangepasswordPage;
