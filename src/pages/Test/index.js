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
} from "components";

const TestPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <Column className="bg-gray_50 border-8 border-red_A700 border-solid font-roboto items-center justify-end mx-[auto] xl:pl-[2px] lg:pl-[2px] pl-[3px] xl:pt-[2px] lg:pt-[2px] pt-[3px] w-[100%]">
        <header className="lg:mt-[17px] xl:mt-[20px] mt-[23px] 3xl:mt-[27px] w-[89%]">
          <Row className="bg-white_A700 items-center justify-start xl:pr-[3px] lg:pr-[3px] pr-[4px] w-[100%]">
            <Image
              src={"images/img_logo_11.png"}
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
                      ? "images/close10.svg"
                      : "images/img_magnifyingglass_11.png"
                  }
                  className="cursor-pointer w-[24px] h-[24px] lg:w-[18px] lg:h-[19px] xl:w-[21px] xl:h-[22px] 2xl:h-[25px] 3xl:w-[28px] 3xl:h-[29px] my-[auto]"
                  alt="MagnifyingGlass"
                />
              }
            ></Input>
            <Button className="bg-gray_200 flex lg:h-[30px] xl:h-[34px] h-[38px] 2xl:h-[39px] 3xl:h-[46px] items-center justify-center lg:ml-[35px] xl:ml-[40px] ml-[45px] 3xl:ml-[54px] my-[10px] 3xl:my-[12px] lg:my-[7px] xl:my-[8px] lg:p-[3px] xl:p-[4px] p-[5px] 3xl:p-[6px] rounded-radius1938 lg:w-[29px] xl:w-[33px] w-[38px] 3xl:w-[45px]">
              <Image
                src={"images/img_group5_13.png"}
                className="w-[24.77px] h-[24.77px] flex items-center justify-center lg:w-[19px] lg:h-[20px] xl:w-[22px] xl:h-[23px] 2xl:w-[24px] 2xl:h-[25px] 3xl:w-[29px] 3xl:h-[30px]"
                alt="Group5"
              />
            </Button>
            <Stack className="lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] lg:ml-[24px] xl:ml-[28px] ml-[32px] 3xl:ml-[38px] 3xl:my-[10px] lg:my-[7px] xl:my-[8px] my-[9px] w-[3%]">
              <Button className="absolute bg-gray_200 flex lg:h-[30px] xl:h-[34px] h-[38px] 2xl:h-[39px] 3xl:h-[46px] items-center justify-center lg:p-[3px] xl:p-[4px] p-[5px] 3xl:p-[6px] rounded-radius1938 w-[100%]">
                <Image
                  src={"images/img_group249.png"}
                  className="w-[24.77px] h-[24.77px] flex items-center justify-center lg:w-[19px] lg:h-[20px] xl:w-[22px] xl:h-[23px] 2xl:w-[24px] 2xl:h-[25px] 3xl:w-[29px] 3xl:h-[30px]"
                  alt="Group249"
                />
              </Button>
              <Text className="absolute bg-red_A701 font-normal lg:h-[15px] xl:h-[17px] h-[19px] 2xl:h-[20px] 3xl:h-[23px] not-italic lg:pl-[4px] xl:pl-[5px] pl-[6px] 3xl:pl-[7px] lg:pr-[3px] xl:pr-[4px] pr-[5px] 3xl:pr-[6px] xl:py-[1px] lg:py-[1px] py-[2px] rounded-radius969 xl:text-[10px] text-[11.63px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[9px] text-white_A700 w-[auto]">
                3
              </Text>
            </Stack>
            <Image
              src={"images/img_ellipse17_5.png"}
              className="lg:h-[30px] xl:h-[34px] h-[38px] 2xl:h-[39px] 3xl:h-[46px] lg:ml-[24px] xl:ml-[28px] ml-[32px] 3xl:ml-[38px] my-[10px] 3xl:my-[12px] lg:my-[7px] xl:my-[8px] object-contain rounded-radius50 w-[auto]"
              alt="Ellipse17"
            />
            <Image
              src={"images/img_vector_27.png"}
              className="lg:h-[6px] h-[7px] 2xl:h-[8px] 3xl:h-[9px] lg:mb-[19px] xl:mb-[22px] mb-[25px] 3xl:mb-[30px] ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] lg:mt-[20px] xl:mt-[23px] mt-[26px] 3xl:mt-[31px] object-contain w-[1%]"
              alt="Vector"
            />
          </Row>
        </header>
        <Stack className="3xl:h-[1114px] lg:h-[721px] xl:h-[825px] h-[927px] 2xl:h-[928px] xl:mt-[10px] mt-[12px] 3xl:mt-[14px] lg:mt-[9px] w-[100%]">
          <Column className="absolute items-start justify-start outline outline-[0.5px] outline-blue_800 lg:pl-[59px] xl:pl-[67px] pl-[76px] 3xl:pl-[91px] lg:py-[59px] xl:py-[67px] py-[76px] 3xl:py-[91px] w-[17%]">
            <Column className="items-start justify-start lg:ml-[17px] xl:ml-[20px] ml-[23px] 3xl:ml-[27px] w-[57%]">
              <Row className="items-start justify-between xl:ml-[2px] lg:ml-[2px] ml-[3px] w-[88%]">
                <Image
                  src={"images/img_vector_28.png"}
                  className="lg:h-[14px] xl:h-[16px] h-[17px] 2xl:h-[18px] 3xl:h-[21px] xl:mb-[2px] lg:mb-[2px] mb-[3px] object-contain lg:w-[13px] xl:w-[15px] w-[17px] 3xl:w-[20px]"
                  alt="Vector"
                />
                <Text className="font-normal xl:mt-[1px] lg:mt-[1px] mt-[2px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_900_cc w-[auto]">
                  Home
                </Text>
              </Row>
              <Row className="items-end justify-start lg:mt-[28px] xl:mt-[32px] mt-[37px] 3xl:mt-[44px] w-[100%]">
                <Image
                  src={"images/img_chalkboardteach_4.png"}
                  className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] mb-[1px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                  alt="ChalkboardTeach"
                />
                <Text className="font-normal lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] lg:mt-[5px] xl:mt-[6px] mt-[7px] 3xl:mt-[8px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_900_b2 w-[auto]">
                  Mentor
                </Text>
              </Row>
            </Column>
            <Input
              className="bg-transparent border-0 font-bold p-[0] lg:pl-[20px] xl:pl-[23px] pl-[26px] 3xl:pl-[31px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] placeholder:text-white_A700_b2 text-white_A700_b2 w-[100%]"
              WrapClassName="3xl:mt-[32px] 3xl:pl-[28px] 3xl:pr-[42px] 3xl:py-[22px] bg-blue_800 flex lg:mt-[21px] lg:pl-[18px] lg:pr-[27px] lg:py-[14px] ml-[0] mt-[27px] pl-[24px] pr-[35px] py-[19px] rounded-bl-[20px] rounded-br-[0] rounded-tl-[20px] rounded-tr-[0] w-[99%] xl:mt-[24px] xl:pl-[21px] xl:pr-[31px] xl:py-[16px]"
              name="Group247"
              placeholder="Test"
              prefix={
                <Image
                  src={"images/img_vector_29.png"}
                  className="w-[21.68px] lg:w-[16px] xl:w-[19px] 2xl:w-[21px] 3xl:w-[26px] my-[auto]"
                  alt="Vector"
                />
              }
            ></Input>
            <Column className="items-start justify-start lg:mb-[281px] xl:mb-[322px] mb-[362px] 3xl:mb-[434px] lg:ml-[17px] xl:ml-[20px] ml-[23px] 3xl:ml-[27px] lg:mt-[19px] xl:mt-[22px] mt-[25px] 3xl:mt-[30px] w-[76%]">
              <Row className="items-start justify-start w-[81%]">
                <Image
                  src={"images/img_notebook_5.png"}
                  className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                  alt="Notebook"
                />
                <Text className="font-normal lg:mb-[3px] xl:mb-[4px] mb-[5px] 3xl:mb-[6px] lg:ml-[19px] xl:ml-[22px] ml-[25px] 3xl:ml-[30px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_900_b2 w-[auto]">
                  Resume
                </Text>
              </Row>
              <Row className="items-start justify-start lg:mt-[30px] xl:mt-[34px] mt-[39px] 3xl:mt-[46px] w-[86%]">
                <Image
                  src={"images/img_suitcasesimple_8.png"}
                  className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:mt-[4px] xl:mt-[5px] mt-[6px] 3xl:mt-[7px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                  alt="SuitcaseSimple"
                />
                <Text className="font-normal mb-[11px] 3xl:mb-[13px] lg:mb-[8px] xl:mb-[9px] lg:ml-[19px] xl:ml-[22px] ml-[25px] 3xl:ml-[30px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_900_b2 w-[auto]">
                  Interview
                </Text>
              </Row>
              <Row className="items-start justify-start lg:mt-[25px] xl:mt-[29px] mt-[33px] 3xl:mt-[39px] w-[100%]">
                <Image
                  src={"images/img_usersthree_7.png"}
                  className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                  alt="UsersThree"
                />
                <Text className="font-normal lg:mb-[3px] xl:mb-[4px] mb-[5px] 3xl:mb-[6px] lg:ml-[19px] xl:ml-[22px] ml-[25px] 3xl:ml-[30px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_900_b2 w-[auto]">
                  Community
                </Text>
              </Row>
              <Row className="items-center justify-start lg:mt-[30px] xl:mt-[34px] mt-[39px] 3xl:mt-[46px] w-[82%]">
                <Image
                  src={"images/img_gear_10.png"}
                  className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                  alt="Gear"
                />
                <Text className="font-normal xl:mb-[1px] lg:mb-[1px] mb-[2px] lg:ml-[19px] xl:ml-[22px] ml-[25px] 3xl:ml-[30px] xl:mt-[2px] lg:mt-[2px] mt-[3px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_900_b2 w-[auto]">
                  Settings
                </Text>
              </Row>
            </Column>
          </Column>
          <Column className="absolute h-[max-content] inset-y-[0] items-center justify-start my-[auto] right-[6%] w-[73%]">
            <Column className="justify-start outline outline-[0.5px] outline-blue_800 lg:p-[17px] xl:p-[20px] p-[23px] 3xl:p-[27px] rounded-radius10 w-[98%]">
              <Row className="items-start justify-start lg:ml-[6px] xl:ml-[7px] ml-[8px] 3xl:ml-[9px] 3xl:mr-[1050px] lg:mr-[680px] xl:mr-[778px] mr-[875px] w-[10%]">
                <div className="bg-blue_800 lg:h-[25px] xl:h-[29px] h-[32px] 2xl:h-[33px] 3xl:h-[39px] xl:mb-[3px] lg:mb-[3px] mb-[4px] xl:mt-[1px] lg:mt-[1px] mt-[2px] rounded-radius5 w-[10%]"></div>
                <Text className="font-medium lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] lg:text-[24px] xl:text-[28px] text-[32px] 3xl:text-[38px] text-gray_900 w-[auto]">
                  Test
                </Text>
              </Row>
              <Text className="font-medium leading-[normal] 3xl:mb-[114px] lg:mb-[73px] xl:mb-[84px] mb-[95px] lg:ml-[23px] xl:ml-[26px] ml-[30px] 3xl:ml-[36px] lg:mr-[24px] xl:mr-[27px] mr-[31px] 3xl:mr-[37px] lg:mt-[48px] xl:mt-[55px] mt-[62px] 3xl:mt-[74px] lg:text-[24px] xl:text-[28px] text-[32px] 3xl:text-[38px] text-center text-gray_900_cc w-[94%]">
                Prepare a github repository on a fintech app design already sent{" "}
                <br />
                to you and give details of your proccess
              </Text>
            </Column>
            <Row className="items-start justify-evenly lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] w-[100%]">
              <Column className="items-start justify-start lg:mb-[109px] xl:mb-[125px] mb-[141px] 3xl:mb-[169px] lg:pr-[39px] xl:pr-[45px] pr-[51px] 3xl:pr-[61px] w-[52%]">
                <div className="bg-white_A700_26 lg:h-[137px] xl:h-[156px] h-[175px] 2xl:h-[176px] 3xl:h-[211px] outline outline-[0.5px] outline-blue_800 rounded-radius5 w-[100%]"></div>
                <Row className="items-center justify-start lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] w-[86%]">
                  <Button className="font-bold outline outline-[0.5px] outline-blue_800 lg:py-[12px] xl:py-[14px] py-[16px] 3xl:py-[19px] rounded-radius10 shadow-bs5 lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-center text-gray_900_cc w-[51%]">
                    Upload file
                  </Button>
                  <Button className="bg-blue_800 font-bold lg:ml-[24px] xl:ml-[28px] ml-[32px] 3xl:ml-[38px] lg:py-[12px] xl:py-[14px] py-[16px] 3xl:py-[19px] rounded-radius10 shadow-bs5 lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-center text-white_A700 w-[42%]">
                    Submit
                  </Button>
                </Row>
              </Column>
              <Column className="items-start justify-start lg:mt-[3px] xl:mt-[4px] mt-[5px] 3xl:mt-[6px] outline outline-[0.5px] outline-blue_800 lg:p-[21px] xl:p-[24px] p-[28px] 3xl:p-[33px] rounded-radius10 shadow-bs1 w-[48%]">
                <Text className="font-bold lg:mt-[4px] xl:mt-[5px] mt-[6px] 3xl:mt-[7px] lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-gray_900 w-[auto]">
                  History
                </Text>
                <Row className="items-start justify-start xl:ml-[2px] lg:ml-[2px] ml-[3px] lg:mt-[24px] xl:mt-[28px] mt-[32px] 3xl:mt-[38px] w-[66%]">
                  <div className="bg-blue_A400 h-[10px] 2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] xl:h-[9px] xl:mb-[3px] mb-[4px] xl:mt-[4px] mt-[5px] 3xl:mt-[6px] lg:my-[3px] rounded-radius50 w-[10px] 3xl:w-[12px] lg:w-[7px] xl:w-[8px]"></div>
                  <Text className="font-normal lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_900_99 w-[auto]">
                    Research team work and tam building
                  </Text>
                </Row>
                <Row className="items-start justify-start lg:mb-[144px] xl:mb-[165px] mb-[186px] 3xl:mb-[223px] xl:ml-[2px] lg:ml-[2px] ml-[3px] lg:mt-[44px] xl:mt-[50px] mt-[57px] 3xl:mt-[68px] w-[52%]">
                  <div className="bg-blue_A400 h-[10px] 2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] xl:h-[9px] lg:mb-[5px] xl:mb-[6px] mb-[7px] 3xl:mb-[8px] xl:mt-[1px] lg:mt-[1px] mt-[2px] rounded-radius50 w-[10px] 3xl:w-[12px] lg:w-[7px] xl:w-[8px]"></div>
                  <Text className="font-normal lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_900_99 w-[auto]">
                    What are stand ups and agile
                  </Text>
                </Row>
              </Column>
            </Row>
          </Column>
          <Line className="absolute bg-blue_800 h-[1435px] inset-x-[0] rotate-[-90deg] w-[100%]" />
        </Stack>
      </Column>
    </>
  );
};

export default TestPage;
