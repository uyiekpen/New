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
  SelectBox,
} from "components";

const ResumePage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <Column className="bg-gray_50 border-8 border-red_A700 border-solid font-roboto items-center justify-end mx-[auto] lg:pt-[20px] xl:pt-[23px] pt-[26px] 3xl:pt-[31px] w-[100%]">
        <header className="w-[89%]">
          <Row className="bg-white_A700 items-center justify-start xl:pr-[3px] lg:pr-[3px] pr-[4px] w-[100%]">
            <Image
              src={"images/img_logo_20.png"}
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
                      ? "images/close16.svg"
                      : "images/img_magnifyingglass_17.png"
                  }
                  className="cursor-pointer w-[24px] h-[24px] lg:w-[18px] lg:h-[19px] xl:w-[21px] xl:h-[22px] 2xl:h-[25px] 3xl:w-[28px] 3xl:h-[29px] my-[auto]"
                  alt="MagnifyingGlass"
                />
              }
            ></Input>
            <Button className="bg-gray_200 flex lg:h-[30px] xl:h-[34px] h-[38px] 2xl:h-[39px] 3xl:h-[46px] items-center justify-center lg:ml-[35px] xl:ml-[40px] ml-[45px] 3xl:ml-[54px] my-[10px] 3xl:my-[12px] lg:my-[7px] xl:my-[8px] lg:p-[3px] xl:p-[4px] p-[5px] 3xl:p-[6px] rounded-radius1938 lg:w-[29px] xl:w-[33px] w-[38px] 3xl:w-[45px]">
              <Image
                src={"images/img_group5_19.png"}
                className="w-[24.77px] h-[24.77px] flex items-center justify-center lg:w-[19px] lg:h-[20px] xl:w-[22px] xl:h-[23px] 2xl:w-[24px] 2xl:h-[25px] 3xl:w-[29px] 3xl:h-[30px]"
                alt="Group5"
              />
            </Button>
            <Stack className="lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] lg:ml-[24px] xl:ml-[28px] ml-[32px] 3xl:ml-[38px] 3xl:my-[10px] lg:my-[7px] xl:my-[8px] my-[9px] w-[3%]">
              <Button className="absolute bg-gray_200 flex lg:h-[30px] xl:h-[34px] h-[38px] 2xl:h-[39px] 3xl:h-[46px] items-center justify-center lg:p-[3px] xl:p-[4px] p-[5px] 3xl:p-[6px] rounded-radius1938 w-[100%]">
                <Image
                  src={"images/img_group381.png"}
                  className="w-[24.77px] h-[24.77px] flex items-center justify-center lg:w-[19px] lg:h-[20px] xl:w-[22px] xl:h-[23px] 2xl:w-[24px] 2xl:h-[25px] 3xl:w-[29px] 3xl:h-[30px]"
                  alt="Group381"
                />
              </Button>
              <Text className="absolute bg-red_A701 font-normal lg:h-[15px] xl:h-[17px] h-[19px] 2xl:h-[20px] 3xl:h-[23px] not-italic lg:pl-[4px] xl:pl-[5px] pl-[6px] 3xl:pl-[7px] lg:pr-[3px] xl:pr-[4px] pr-[5px] 3xl:pr-[6px] xl:py-[1px] lg:py-[1px] py-[2px] rounded-radius969 xl:text-[10px] text-[11.63px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[9px] text-white_A700 w-[auto]">
                3
              </Text>
            </Stack>
            <Image
              src={"images/img_ellipse17_7.png"}
              className="lg:h-[30px] xl:h-[34px] h-[38px] 2xl:h-[39px] 3xl:h-[46px] lg:ml-[24px] xl:ml-[28px] ml-[32px] 3xl:ml-[38px] my-[10px] 3xl:my-[12px] lg:my-[7px] xl:my-[8px] object-contain rounded-radius50 w-[auto]"
              alt="Ellipse17"
            />
            <Image
              src={"images/img_vector_55.png"}
              className="lg:h-[6px] h-[7px] 2xl:h-[8px] 3xl:h-[9px] lg:mb-[19px] xl:mb-[22px] mb-[25px] 3xl:mb-[30px] ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] lg:mt-[20px] xl:mt-[23px] mt-[26px] 3xl:mt-[31px] object-contain w-[1%]"
              alt="Vector"
            />
          </Row>
        </header>
        <Stack className="lg:h-[1199px] xl:h-[1371px] h-[1541px] 2xl:h-[1543px] 3xl:h-[1851px] lg:mt-[21px] xl:mt-[24px] mt-[27px] 3xl:mt-[32px] w-[100%]">
          <Line className="absolute bg-blue_800 h-[1440px] rotate-[-90deg] w-[100%]" />
          <Column className="absolute items-start justify-center left-[0] outline outline-[0.5px] outline-blue_800 lg:pl-[59px] xl:pl-[68px] pl-[77px] 3xl:pl-[92px] lg:py-[59px] xl:py-[68px] py-[77px] 3xl:py-[92px] w-[17%]">
            <Column className="items-start justify-start lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] mt-[1px] w-[57%]">
              <Row className="items-start justify-between xl:ml-[2px] lg:ml-[2px] ml-[3px] w-[88%]">
                <Image
                  src={"images/img_vector_56.png"}
                  className="lg:h-[14px] xl:h-[16px] h-[17px] 2xl:h-[18px] 3xl:h-[21px] mb-[0] mt-[1px] object-contain lg:w-[13px] xl:w-[15px] w-[17px] 3xl:w-[20px]"
                  alt="Vector"
                />
                <Text className="font-normal not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_900_cc w-[auto]">
                  Home
                </Text>
              </Row>
              <Row className="items-center justify-start lg:mt-[35px] xl:mt-[40px] mt-[46px] 3xl:mt-[55px] w-[100%]">
                <Image
                  src={"images/img_chalkboardteach_6.png"}
                  className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                  alt="ChalkboardTeach"
                />
                <Text className="font-normal xl:mb-[1px] lg:mb-[1px] mb-[2px] lg:ml-[17px] xl:ml-[20px] ml-[23px] 3xl:ml-[27px] xl:mt-[2px] lg:mt-[2px] mt-[3px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_900_b2 w-[auto]">
                  Mentor
                </Text>
              </Row>
              <Row className="items-center justify-start ml-[0] lg:mt-[32px] xl:mt-[37px] mt-[42px] 3xl:mt-[50px] w-[80%]">
                <Image
                  src={"images/img_bookopen_6.png"}
                  className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                  alt="BookOpen"
                />
                <Text className="font-normal xl:mb-[1px] lg:mb-[1px] mb-[2px] lg:ml-[17px] xl:ml-[20px] ml-[23px] 3xl:ml-[27px] xl:mt-[2px] lg:mt-[2px] mt-[3px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_900_b2 w-[auto]">
                  Test
                </Text>
              </Row>
            </Column>
            <Input
              className="bg-transparent border-0 font-bold p-[0] lg:pl-[20px] xl:pl-[23px] pl-[26px] 3xl:pl-[31px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] placeholder:text-white_A700 text-white_A700 w-[100%]"
              WrapClassName="3xl:mt-[19px] 3xl:pb-[24px] 3xl:pl-[32px] 3xl:pr-[42px] 3xl:pt-[21px] bg-blue_800 flex lg:mt-[12px] lg:pb-[15px] lg:pl-[21px] lg:pr-[27px] lg:pt-[14px] mt-[16px] pb-[20px] pl-[27px] pr-[35px] pt-[18px] rounded-bl-[20px] rounded-br-[0] rounded-tl-[20px] rounded-tr-[0] w-[100%] xl:mt-[14px] xl:pb-[17px] xl:pl-[24px] xl:pr-[31px] xl:pt-[16px]"
              name="Group373"
              placeholder="Resume"
              prefix={
                <Image
                  src={"images/img_vector_57.png"}
                  className="w-[18.58px] h-[18.58px] lg:w-[14px] lg:h-[15px] xl:w-[16px] xl:h-[17px] 2xl:w-[18px] 2xl:h-[19px] 3xl:w-[22px] 3xl:h-[23px] my-[auto]"
                  alt="Vector"
                />
              }
            ></Input>
            <Column className="items-start justify-start 3xl:mb-[1161px] lg:mb-[752px] xl:mb-[860px] mb-[967px] lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] w-[75%]">
              <Row className="items-center justify-start w-[85%]">
                <Image
                  src={"images/img_suitcasesimple_13.png"}
                  className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                  alt="SuitcaseSimple"
                />
                <Text className="font-normal xl:mb-[1px] lg:mb-[1px] mb-[2px] lg:ml-[17px] xl:ml-[20px] ml-[23px] 3xl:ml-[27px] xl:mt-[2px] lg:mt-[2px] mt-[3px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_900_b2 w-[auto]">
                  Interview
                </Text>
              </Row>
              <Row className="items-center justify-start lg:mt-[31px] xl:mt-[35px] mt-[40px] 3xl:mt-[48px] w-[100%]">
                <Image
                  src={"images/img_usersthree_9.png"}
                  className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                  alt="UsersThree"
                />
                <Text className="font-normal xl:mb-[1px] lg:mb-[1px] mb-[2px] lg:ml-[17px] xl:ml-[20px] ml-[23px] 3xl:ml-[27px] xl:mt-[2px] lg:mt-[2px] mt-[3px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_900_b2 w-[auto]">
                  Community
                </Text>
              </Row>
              <Row className="items-start justify-start lg:mt-[31px] xl:mt-[36px] mt-[41px] 3xl:mt-[49px] w-[82%]">
                <Image
                  src={"images/img_gear_15.png"}
                  className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                  alt="Gear"
                />
                <Text className="font-normal xl:mb-[2px] lg:mb-[2px] mb-[3px] lg:ml-[17px] xl:ml-[20px] ml-[23px] 3xl:ml-[27px] xl:mt-[1px] lg:mt-[1px] mt-[2px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_900_b2 w-[auto]">
                  Settings
                </Text>
              </Row>
            </Column>
          </Column>
          <Column className="absolute h-[max-content] inset-y-[0] items-start justify-start my-[auto] right-[5%] w-[74%]">
            <Row className="items-center justify-between w-[100%]">
              <Text className="font-bold lg:text-[31px] xl:text-[35px] text-[40px] 3xl:text-[48px] text-gray_900 w-[auto]">
                FELIX JOHN PHILIP
              </Text>
              <Text className="font-normal 3xl:my-[10px] lg:my-[7px] xl:my-[8px] my-[9px] not-italic lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-black_900_7f w-[auto]">
                Preview Resume
              </Text>
            </Row>
            <Row className="items-start justify-start ml-[1px] lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] w-[14%]">
              <Text className="font-normal not-italic lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-blue_800_a5 w-[auto]">
                Add About
              </Text>
              <Image
                src={"images/img_plus_13.png"}
                className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] xl:mb-[2px] lg:mb-[2px] mb-[3px] lg:ml-[10px] xl:ml-[12px] ml-[14px] 3xl:ml-[16px] mt-[0] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                alt="Plus"
              />
            </Row>
            <Text className="font-normal xl:ml-[1px] lg:ml-[1px] ml-[2px] lg:mt-[30px] xl:mt-[34px] mt-[39px] 3xl:mt-[46px] not-italic lg:text-[24px] xl:text-[28px] text-[32px] 3xl:text-[38px] text-black_900_b2 w-[auto]">
              Skills
            </Text>
            <Row className="items-start justify-start lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] w-[9%]">
              <Text className="font-normal not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-blue_800_a5 w-[auto]">
                Add Skills
              </Text>
              <Image
                src={"images/img_plus_14.png"}
                className="lg:h-[13px] xl:h-[15px] h-[16px] 2xl:h-[17px] 3xl:h-[20px] mb-[1px] 3xl:ml-[10px] lg:ml-[7px] xl:ml-[8px] ml-[9px] xl:mt-[1px] lg:mt-[1px] mt-[2px] object-contain lg:w-[12px] xl:w-[14px] w-[16px] 3xl:w-[19px]"
                alt="Plus"
              />
            </Row>
            <Row className="items-center justify-start xl:ml-[1px] lg:ml-[1px] ml-[2px] lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] w-[39%]">
              <Button
                className="3xl:px-[21px] 3xl:py-[16px] flex items-center justify-between lg:px-[14px] lg:py-[10px] mb-[1px] outline outline-[0.5px] outline-blue_800 px-[18px] py-[14px] rounded-radius24 shadow-bs17 text-center w-[44%] xl:px-[16px] xl:py-[12px]"
                rightIcon={
                  <Image
                    src={"images/img_plus_15.png"}
                    className="w-[22.59px] h-[22.59px] text-center lg:w-[17px] lg:h-[18px] xl:w-[20px] xl:h-[21px] 2xl:w-[22px] 2xl:h-[23px] 3xl:w-[27px] 3xl:h-[28px]"
                    alt="Plus"
                  />
                }
              >
                <div className="bg-transparent font-normal not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-black_900_b2">
                  Communication
                </div>
              </Button>
              <Button
                className="3xl:ml-[44px] 3xl:px-[30px] 3xl:py-[16px] flex items-center justify-between lg:ml-[28px] lg:px-[19px] lg:py-[10px] ml-[37px] mt-[1px] outline outline-[0.5px] outline-blue_800 px-[25px] py-[14px] rounded-radius24 shadow-bs17 text-center w-[47%] xl:ml-[32px] xl:px-[22px] xl:py-[12px]"
                rightIcon={
                  <Image
                    src={"images/img_plus_16.png"}
                    className="w-[21.25px] text-center lg:w-[16px] xl:w-[18px] 2xl:w-[21px] 3xl:w-[25px]"
                    alt="Plus"
                  />
                }
              >
                <div className="bg-transparent font-normal not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-black_900_b2">
                  Problem solving
                </div>
              </Button>
            </Row>
            <Text className="font-normal xl:ml-[1px] lg:ml-[1px] ml-[2px] lg:mt-[17px] xl:mt-[20px] mt-[23px] 3xl:mt-[27px] not-italic lg:text-[24px] xl:text-[28px] text-[32px] 3xl:text-[38px] text-black_900_b2 w-[auto]">
              Languages
            </Text>
            <SelectBox
              className="bg-transparent font-normal xl:ml-[1px] lg:ml-[1px] ml-[2px] lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] outline outline-[0.5px] outline-blue_800 lg:pb-[12px] xl:pb-[14px] pb-[16px] 3xl:pb-[19px] lg:pl-[21px] xl:pl-[24px] pl-[27px] 3xl:pl-[32px] lg:pt-[13px] xl:pt-[15px] pt-[17px] 3xl:pt-[20px] rounded-radius26 shadow-bs17 lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-black_900_b2 w-[37%]"
              placeholderClassName="bg-transparent text-black_900_b2"
              name="Group372"
              placeholder="English"
              isSearchable={false}
              isMulti={false}
              indicator={
                <Image
                  src={"images/img_vector_58.png"}
                  className="w-[15px] h-[7.5px] mr-[25px] object-contain lg:w-[11px] lg:h-[6px] lg:mr-[19px] xl:w-[13px] xl:h-[7px] xl:mr-[22px] 2xl:h-[8px] 3xl:w-[18px] 3xl:h-[10px] 3xl:mr-[30px]"
                  alt="Vector"
                />
              }
            ></SelectBox>
            <Row className="items-center justify-start lg:mt-[11px] xl:mt-[13px] mt-[15px] 3xl:mt-[18px] w-[35%]">
              <Input
                className="bg-transparent border-0 font-normal not-italic p-[0] pl-[0] lg:pr-[20px] xl:pr-[23px] pr-[26px] 3xl:pr-[31px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] placeholder:text-black_900_b2 text-black_900_b2 w-[100%]"
                WrapClassName="3xl:pb-[14px] 3xl:pl-[42px] 3xl:pr-[18px] 3xl:pt-[18px] flex lg:pb-[9px] lg:pl-[27px] lg:pr-[11px] lg:pt-[11px] mb-[1px] outline outline-[0.5px] outline-blue_800 pb-[12px] pl-[35px] pr-[15px] pt-[15px] rounded-radius22 shadow-bs17 w-[48%] xl:pb-[10px] xl:pl-[31px] xl:pr-[13px] xl:pt-[13px]"
                name="Group371"
                placeholder="English"
                suffix={
                  <Image
                    src={"images/img_plus_17.png"}
                    className="w-[22.59px] lg:w-[17px] xl:w-[20px] 2xl:w-[22px] 3xl:w-[27px] my-[auto]"
                    alt="Plus"
                  />
                }
              ></Input>
              <Row className="items-center justify-end lg:ml-[31px] xl:ml-[35px] ml-[40px] 3xl:ml-[48px] mt-[1px] outline outline-[0.5px] outline-blue_800 p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[8px] rounded-radius22 shadow-bs17 w-[41%]">
                <Text className="font-normal xl:mb-[3px] lg:mb-[3px] mb-[4px] mt-[1px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-black_900_b2 w-[auto]">
                  French
                </Text>
                <Image
                  src={"images/img_plus_18.png"}
                  className="lg:h-[18px] xl:h-[20px] h-[22px] 2xl:h-[23px] 3xl:h-[27px] lg:ml-[21px] xl:ml-[24px] ml-[27px] 3xl:ml-[32px] lg:mr-[6px] xl:mr-[7px] mr-[8px] 3xl:mr-[9px] mt-[0] object-contain lg:w-[17px] xl:w-[19px] w-[22px] 3xl:w-[26px]"
                  alt="Plus"
                />
              </Row>
            </Row>
            <Text className="font-normal ml-[1px] lg:mt-[17px] xl:mt-[20px] mt-[23px] 3xl:mt-[27px] not-italic lg:text-[24px] xl:text-[28px] text-[32px] 3xl:text-[38px] text-gray_900 w-[auto]">
              Education
            </Text>
            <Stack className="lg:h-[63px] xl:h-[73px] h-[81px] 2xl:h-[82px] 3xl:h-[98px] ml-[1px] lg:mt-[18px] xl:mt-[21px] mt-[24px] 3xl:mt-[28px] w-[48%]">
              <div className="absolute lg:h-[50px] xl:h-[57px] h-[64px] 2xl:h-[65px] 3xl:h-[77px] outline outline-[0.5px] outline-blue_800 rounded-radius32 w-[100%]"></div>
              <Text className="absolute bg-white_A700 font-normal left-[3%] not-italic lg:pl-[11px] xl:pl-[13px] pl-[15px] 3xl:pl-[18px] lg:pr-[14px] xl:pr-[16px] pr-[18px] 3xl:pr-[21px] xl:py-[2px] lg:py-[2px] py-[3px] lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-gray_900_b2 w-[auto]">
                Certification
              </Text>
            </Stack>
            <Stack className="lg:h-[63px] xl:h-[72px] h-[80px] 2xl:h-[81px] 3xl:h-[97px] ml-[1px] lg:mt-[11px] xl:mt-[13px] mt-[15px] 3xl:mt-[18px] w-[48%]">
              <div className="absolute lg:h-[50px] xl:h-[57px] h-[64px] 2xl:h-[65px] 3xl:h-[77px] outline outline-[0.5px] outline-blue_800 rounded-radius32 w-[100%]"></div>
              <Text className="absolute bg-white_A700 font-normal left-[3%] not-italic lg:pl-[11px] xl:pl-[13px] pl-[15px] 3xl:pl-[18px] lg:pr-[13px] xl:pr-[15px] pr-[17px] 3xl:pr-[20px] xl:py-[2px] lg:py-[2px] py-[3px] lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-gray_900_b2 w-[auto]">
                Year
              </Text>
            </Stack>
            <Row className="items-start justify-start lg:ml-[252px] xl:ml-[288px] ml-[324px] 3xl:ml-[389px] lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] w-[18%]">
              <Text className="font-normal not-italic lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-blue_800_7f w-[auto]">
                Add Education
              </Text>
              <Image
                src={"images/img_plus_19.png"}
                className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] mb-[0] lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] xl:mt-[2px] lg:mt-[2px] mt-[3px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                alt="Plus"
              />
            </Row>
            <Text className="font-normal ml-[1px] lg:mt-[11px] xl:mt-[13px] mt-[15px] 3xl:mt-[18px] not-italic lg:text-[24px] xl:text-[28px] text-[32px] 3xl:text-[38px] text-gray_900 w-[auto]">
              Experience
            </Text>
            <Stack className="lg:h-[63px] xl:h-[73px] h-[81px] 2xl:h-[82px] 3xl:h-[98px] ml-[1px] lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] w-[48%]">
              <div className="absolute lg:h-[50px] xl:h-[57px] h-[64px] 2xl:h-[65px] 3xl:h-[77px] outline outline-[0.5px] outline-blue_800 rounded-radius32 w-[100%]"></div>
              <Text className="absolute bg-white_A700 font-normal left-[3%] not-italic lg:pl-[11px] xl:pl-[13px] pl-[15px] 3xl:pl-[18px] lg:pr-[10px] xl:pr-[11px] pr-[13px] 3xl:pr-[15px] xl:py-[2px] lg:py-[2px] py-[3px] lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-gray_900_b2 w-[auto]">
                Company
              </Text>
            </Stack>
            <Stack className="lg:h-[63px] xl:h-[72px] h-[80px] 2xl:h-[81px] 3xl:h-[97px] ml-[1px] lg:mt-[11px] xl:mt-[13px] mt-[15px] 3xl:mt-[18px] w-[48%]">
              <div className="absolute lg:h-[50px] xl:h-[57px] h-[64px] 2xl:h-[65px] 3xl:h-[77px] outline outline-[0.5px] outline-blue_800 rounded-radius32 w-[100%]"></div>
              <Text className="absolute bg-white_A700 font-normal left-[3%] not-italic lg:pl-[11px] xl:pl-[13px] pl-[15px] 3xl:pl-[18px] lg:pr-[13px] xl:pr-[15px] pr-[17px] 3xl:pr-[20px] xl:py-[2px] lg:py-[2px] py-[3px] lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-gray_900_b2 w-[auto]">
                Year
              </Text>
            </Stack>
            <Stack className="lg:h-[63px] xl:h-[72px] h-[80px] 2xl:h-[81px] 3xl:h-[97px] ml-[1px] lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] w-[48%]">
              <div className="absolute lg:h-[50px] xl:h-[57px] h-[64px] 2xl:h-[65px] 3xl:h-[77px] outline outline-[0.5px] outline-blue_800 rounded-radius32 w-[100%]"></div>
              <Text className="absolute bg-white_A700 font-normal left-[3%] not-italic lg:px-[11px] xl:px-[13px] px-[15px] 3xl:px-[18px] xl:py-[2px] lg:py-[2px] py-[3px] lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-gray_900_b2 w-[auto]">
                Post
              </Text>
            </Stack>
            <Stack className="lg:h-[63px] xl:h-[72px] h-[80px] 2xl:h-[81px] 3xl:h-[97px] ml-[1px] lg:mt-[11px] xl:mt-[13px] mt-[15px] 3xl:mt-[18px] w-[48%]">
              <div className="absolute lg:h-[50px] xl:h-[57px] h-[64px] 2xl:h-[65px] 3xl:h-[77px] outline outline-[0.5px] outline-blue_800 rounded-radius32 w-[100%]"></div>
              <Text className="absolute bg-white_A700 font-normal left-[3%] not-italic lg:pl-[11px] xl:pl-[13px] pl-[15px] 3xl:pl-[18px] lg:pr-[10px] xl:pr-[12px] pr-[14px] 3xl:pr-[16px] xl:py-[2px] lg:py-[2px] py-[3px] lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-gray_900_b2 w-[auto]">
                About
              </Text>
            </Stack>
            <Row className="items-end justify-start lg:ml-[240px] xl:ml-[274px] ml-[309px] 3xl:ml-[371px] lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] w-[19%]">
              <Text className="font-normal xl:mb-[2px] lg:mb-[2px] mb-[3px] not-italic lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-blue_800_a5 w-[auto]">
                Add Experience
              </Text>
              <Image
                src={"images/img_plus_20.png"}
                className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] lg:mt-[5px] xl:mt-[6px] mt-[7px] 3xl:mt-[8px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                alt="Plus"
              />
            </Row>
            <Row className="items-center justify-center lg:ml-[252px] xl:ml-[288px] ml-[324px] 3xl:ml-[389px] lg:mt-[63px] xl:mt-[72px] mt-[81px] 3xl:mt-[97px] w-[38%]">
              <Button className="font-bold outline outline-[0.5px] outline-blue_800 lg:py-[12px] xl:py-[14px] py-[16px] 3xl:py-[19px] rounded-radius10 shadow-bs5 lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-center text-gray_900_cc w-[52%]">
                Download
              </Button>
              <Button className="bg-blue_800 font-bold lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] lg:py-[12px] xl:py-[14px] py-[16px] 3xl:py-[19px] rounded-radius10 shadow-bs5 lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-center text-white_A700 w-[44%]">
                Update
              </Button>
            </Row>
          </Column>
        </Stack>
      </Column>
    </>
  );
};

export default ResumePage;
