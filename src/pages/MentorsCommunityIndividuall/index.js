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
} from "components";

const MentorsCommunityIndividuallPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <Column className="bg-gray_50 border-8 border-red_A700 border-solid font-roboto items-center justify-end mx-[auto] pr-[1px] pt-[1px] w-[100%]">
        <header className="lg:mt-[19px] xl:mt-[22px] mt-[25px] 3xl:mt-[30px] w-[89%]">
          <Stack className="bg-white_A700 lg:h-[46px] xl:h-[53px] h-[59px] 2xl:h-[60px] 3xl:h-[71px] w-[100%]">
            <Stack className="absolute bg-white_A700 lg:h-[46px] xl:h-[53px] h-[59px] 2xl:h-[60px] 3xl:h-[71px] xl:pr-[1096px] pr-[1233px] 3xl:pr-[1480px] lg:pr-[959px] right-[0] w-[100%]">
              <Image
                src={"images/img_logo_4.png"}
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
                        ? "images/close4.svg"
                        : "images/img_magnifyingglass_4.png"
                    }
                    className="cursor-pointer w-[24px] h-[24px] lg:w-[18px] lg:h-[19px] xl:w-[21px] xl:h-[22px] 2xl:h-[25px] 3xl:w-[28px] 3xl:h-[29px] my-[auto]"
                    alt="MagnifyingGlass"
                  />
                }
              ></Input>
              <Button className="bg-gray_200 flex lg:h-[30px] xl:h-[34px] h-[38px] 2xl:h-[39px] 3xl:h-[46px] items-center justify-center lg:my-[4px] xl:my-[5px] my-[6px] 3xl:my-[7px] lg:p-[3px] xl:p-[4px] p-[5px] 3xl:p-[6px] rounded-radius1938 lg:w-[29px] xl:w-[33px] w-[38px] 3xl:w-[45px]">
                <Image
                  src={"images/img_group5_6.png"}
                  className="w-[24.77px] h-[24.77px] flex items-center justify-center lg:w-[19px] lg:h-[20px] xl:w-[22px] xl:h-[23px] 2xl:w-[24px] 2xl:h-[25px] 3xl:w-[29px] 3xl:h-[30px]"
                  alt="Group5"
                />
              </Button>
              <Stack className="lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] lg:my-[3px] xl:my-[4px] my-[5px] 3xl:my-[6px] w-[7%]">
                <Button className="absolute bg-gray_200 flex lg:h-[30px] xl:h-[34px] h-[38px] 2xl:h-[39px] 3xl:h-[46px] items-center justify-center lg:p-[3px] xl:p-[4px] p-[5px] 3xl:p-[6px] rounded-radius1938 w-[100%]">
                  <Image
                    src={"images/img_group111.png"}
                    className="w-[24.77px] h-[24.77px] flex items-center justify-center lg:w-[19px] lg:h-[20px] xl:w-[22px] xl:h-[23px] 2xl:w-[24px] 2xl:h-[25px] 3xl:w-[29px] 3xl:h-[30px]"
                    alt="Group111"
                  />
                </Button>
                <Text className="absolute bg-red_A701 font-normal lg:h-[15px] xl:h-[17px] h-[19px] 2xl:h-[20px] 3xl:h-[23px] not-italic lg:pl-[4px] xl:pl-[5px] pl-[6px] 3xl:pl-[7px] lg:pr-[3px] xl:pr-[4px] pr-[5px] 3xl:pr-[6px] xl:py-[1px] lg:py-[1px] py-[2px] rounded-radius969 xl:text-[10px] text-[11.63px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[9px] text-white_A700 w-[auto]">
                  3
                </Text>
              </Stack>
              <Image
                src={"images/img_group117_1.png"}
                className="lg:h-[30px] xl:h-[34px] h-[38px] 2xl:h-[39px] 3xl:h-[46px] lg:my-[4px] xl:my-[5px] my-[6px] 3xl:my-[7px] object-contain w-[14%]"
                alt="Group117"
              />
            </Row>
          </Stack>
        </header>
        <Column className="items-start justify-start xl:mt-[10px] mt-[12px] 3xl:mt-[14px] lg:mt-[9px] w-[100%]">
          <Line className="bg-blue_800 h-[1439px] rotate-[-90deg] w-[100%]" />
          <Row className="items-center justify-start w-[94%]">
            <Column className="bg-gray_50 outline outline-[0.5px] outline-blue_800 lg:pl-[62px] xl:pl-[71px] pl-[80px] 3xl:pl-[96px] lg:py-[62px] xl:py-[71px] py-[80px] 3xl:py-[96px] w-[19%]">
              <Row className="items-center justify-end lg:ml-[21px] xl:ml-[24px] ml-[27px] 3xl:ml-[32px] lg:mr-[45px] xl:mr-[51px] mr-[58px] 3xl:mr-[69px] xl:mt-[1px] lg:mt-[1px] mt-[2px] w-[50%]">
                <Image
                  src={"images/img_vector_9.png"}
                  className="lg:h-[14px] xl:h-[16px] h-[17px] 2xl:h-[18px] 3xl:h-[21px] mb-[1px] mt-[0] object-contain lg:w-[13px] xl:w-[15px] w-[17px] 3xl:w-[20px]"
                  alt="Vector"
                />
                <Text className="font-normal lg:ml-[21px] xl:ml-[24px] ml-[28px] 3xl:ml-[33px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_900_cc w-[auto]">
                  Home
                </Text>
              </Row>
              <Stack className="lg:h-[155px] xl:h-[178px] h-[199px] 2xl:h-[200px] 3xl:h-[239px] lg:mb-[402px] xl:mb-[460px] mb-[518px] 3xl:mb-[621px] lg:mt-[21px] xl:mt-[24px] mt-[27px] 3xl:mt-[32px] w-[100%]">
                <Input
                  className="bg-transparent border-0 font-bold inset-x-[0] p-[0] lg:pl-[17px] xl:pl-[20px] pl-[23px] 3xl:pl-[27px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] placeholder:text-white_A700 text-white_A700 w-[100%]"
                  WrapClassName="3xl:pb-[25px] 3xl:pl-[27px] 3xl:pr-[22px] 3xl:pt-[20px] absolute bg-blue_800 flex lg:pb-[16px] lg:pl-[17px] lg:pr-[14px] lg:pt-[13px] pb-[21px] pl-[23px] pr-[19px] pt-[17px] rounded-bl-[20px] rounded-br-[0] rounded-tl-[20px] rounded-tr-[0] w-[100%] xl:pb-[18px] xl:pl-[20px] xl:pr-[16px] xl:pt-[15px]"
                  name="Group107"
                  placeholder="Community"
                  prefix={
                    <Image
                      src={"images/img_usersthree_4.png"}
                      className="w-[24.77px] h-[24.77px] absolute lg:w-[19px] lg:h-[20px] xl:w-[22px] xl:h-[23px] 2xl:w-[24px] 2xl:h-[25px] 3xl:w-[29px] 3xl:h-[30px] my-[auto]"
                      alt="UsersThree"
                    />
                  }
                ></Input>
                <Row className="absolute bottom-[39%] items-start justify-start left-[13%] w-[62%]">
                  <Image
                    src={"images/img_gear_4.png"}
                    className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:mt-[5px] xl:mt-[6px] mt-[7px] 3xl:mt-[8px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                    alt="Gear"
                  />
                  <Text className="font-normal xl:mb-[10px] mb-[12px] 3xl:mb-[14px] lg:mb-[9px] lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_900_b2 w-[auto]">
                    Settings
                  </Text>
                </Row>
                <Column className="absolute bg-white_A700 items-start justify-start lg:pl-[14px] xl:pl-[16px] pl-[18px] 3xl:pl-[21px] lg:py-[14px] xl:py-[16px] py-[18px] 3xl:py-[21px] rounded-bl-[20px] rounded-br-[0] rounded-tl-[0] rounded-tr-[0] shadow-bs w-[100%]">
                  <Text className="font-normal lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_900_cc w-[auto]">
                    All Mentees
                  </Text>
                  <Row className="items-center justify-end ml-[auto] mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[85%]">
                    <Text className="font-normal lg:mb-[6px] xl:mb-[7px] mb-[8px] 3xl:mb-[9px] lg:mt-[14px] xl:mt-[16px] mt-[18px] 3xl:mt-[21px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_900_cc w-[auto]">
                      Isreal Banton
                    </Text>
                    <div className="bg-blue_800 lg:h-[35px] xl:h-[41px] h-[45px] 2xl:h-[46px] 3xl:h-[55px] lg:ml-[23px] xl:ml-[26px] ml-[30px] 3xl:ml-[36px] rounded-radius4 w-[6%]"></div>
                  </Row>
                  <Text className="font-normal lg:mb-[3px] xl:mb-[4px] mb-[5px] 3xl:mb-[6px] lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] lg:mt-[10px] xl:mt-[12px] mt-[14px] 3xl:mt-[16px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_900_cc w-[auto]">
                    Victor Braman
                  </Text>
                </Column>
              </Stack>
            </Column>
            <Column className="items-start lg:mb-[60px] xl:mb-[69px] mb-[78px] 3xl:mb-[93px] lg:ml-[36px] xl:ml-[41px] ml-[47px] 3xl:ml-[56px] lg:mt-[51px] xl:mt-[58px] mt-[66px] 3xl:mt-[79px] w-[78%]">
              <Row className="bg-blue_800 items-center justify-end outline outline-[0.5px] outline-blue_800 lg:p-[12px] xl:p-[14px] p-[16px] 3xl:p-[19px] rounded-bl-[0] rounded-br-[0] rounded-tl-[10px] rounded-tr-[10px] w-[100%]">
                <Text className="font-medium lg:my-[10px] xl:my-[12px] my-[14px] 3xl:my-[16px] lg:text-[24px] xl:text-[28px] text-[32px] 3xl:text-[38px] text-white_A700 w-[auto]">
                  Isreal Banton
                </Text>
                <Text className="font-normal lg:mb-[19px] xl:mb-[22px] mb-[25px] 3xl:mb-[30px] lg:ml-[464px] xl:ml-[531px] ml-[597px] 3xl:ml-[716px] lg:mt-[17px] xl:mt-[19px] mt-[22px] 3xl:mt-[26px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-white_A700 w-[auto]">
                  Assign Task
                </Text>
                <Image
                  src={"images/img_ellipse40.png"}
                  className="lg:h-[52px] xl:h-[59px] h-[66px] 2xl:h-[67px] 3xl:h-[80px] lg:ml-[14px] xl:ml-[16px] ml-[19px] 3xl:ml-[22px] lg:mr-[10px] xl:mr-[11px] mr-[13px] 3xl:mr-[15px] object-contain rounded-radius50 w-[auto]"
                  alt="Ellipse40"
                />
              </Row>
              <Row className="items-center justify-start ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:mt-[63px] xl:mt-[72px] mt-[81px] 3xl:mt-[97px] w-[46%]">
                <Image
                  src={"images/img_ellipse37_1.png"}
                  className="lg:h-[52px] xl:h-[59px] h-[66px] 2xl:h-[67px] 3xl:h-[80px] object-contain rounded-radius50 w-[auto]"
                  alt="Ellipse37"
                />
                <Button className="bg-blue_800 font-normal lg:ml-[26px] xl:ml-[30px] ml-[34px] 3xl:ml-[40px] xl:my-[3px] lg:my-[3px] my-[4px] not-italic lg:py-[11px] xl:py-[13px] py-[15px] 3xl:py-[18px] rounded-radius5 lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-center text-white_A700 w-[79%]">
                  Good morning sir, how do you do
                </Button>
              </Row>
              <Column className="bg-gray_200 items-start justify-start lg:ml-[430px] xl:ml-[491px] ml-[553px] 3xl:ml-[663px] lg:mt-[56px] xl:mt-[64px] mt-[72px] 3xl:mt-[86px] lg:p-[12px] xl:p-[14px] p-[16px] 3xl:p-[19px] rounded-radius5 w-[46%]">
                <Text className="font-normal leading-[normal] mb-[11px] 3xl:mb-[13px] lg:mb-[8px] xl:mb-[9px] 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] mt-[9px] not-italic lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-gray_900 text-left w-[92%]">
                  Hello isreal, Hows the family and i hope
                  <br />
                  you’ve thought about what i told you the
                  <br />
                  other day and now have an answer?
                </Text>
              </Column>
              <Row className="items-center justify-start lg:mt-[187px] xl:mt-[214px] mt-[241px] 3xl:mt-[289px] w-[95%]">
                <Stack className="3xl:h-[105px] lg:h-[68px] xl:h-[78px] h-[87px] 2xl:h-[88px] w-[95%]">
                  <Text className="absolute font-normal h-[max-content] inset-y-[0] left-[11%] my-[auto] not-italic lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-gray_900 w-[auto]">
                    I’m good Isreal and you?
                  </Text>
                  <Row className="absolute items-center justify-start outline outline-[1.5px] outline-blue_800 lg:p-[17px] xl:p-[19px] p-[22px] 3xl:p-[26px] rounded-radius40 w-[100%]">
                    <Image
                      src={"images/img_plus_1.png"}
                      className="lg:h-[26px] xl:h-[30px] h-[33px] 2xl:h-[34px] 3xl:h-[40px] xl:mb-[3px] mb-[4px] xl:ml-[1px] lg:ml-[1px] ml-[2px] xl:mt-[4px] mt-[5px] 3xl:mt-[6px] lg:my-[3px] object-contain lg:w-[25px] xl:w-[29px] w-[33px] 3xl:w-[39px]"
                      alt="Plus"
                    />
                    <Line className="bg-gray_900_7c lg:h-[30px] xl:h-[34px] h-[38px] 2xl:h-[39px] 3xl:h-[46px] lg:mb-[3px] xl:mb-[4px] mb-[5px] 3xl:mb-[6px] lg:ml-[241px] xl:ml-[275px] ml-[310px] 3xl:ml-[372px] w-[2px]" />
                    <Image
                      src={"images/img_paperplaneright_1.png"}
                      className="lg:h-[26px] xl:h-[30px] h-[33px] 2xl:h-[34px] 3xl:h-[40px] xl:mb-[3px] mb-[4px] lg:ml-[399px] xl:ml-[457px] ml-[514px] 3xl:ml-[617px] xl:mt-[4px] mt-[5px] 3xl:mt-[6px] lg:my-[3px] object-contain lg:w-[25px] xl:w-[29px] w-[33px] 3xl:w-[39px]"
                      alt="PaperPlaneRight"
                    />
                  </Row>
                </Stack>
                <Image
                  src={"images/img_camera_1.png"}
                  className="lg:h-[26px] xl:h-[30px] h-[33px] 2xl:h-[34px] 3xl:h-[40px] lg:mb-[20px] xl:mb-[23px] mb-[26px] 3xl:mb-[31px] lg:ml-[12px] xl:ml-[14px] ml-[16px] 3xl:ml-[19px] lg:mt-[21px] xl:mt-[24px] mt-[27px] 3xl:mt-[32px] object-contain lg:w-[25px] xl:w-[29px] w-[33px] 3xl:w-[39px]"
                  alt="Camera"
                />
              </Row>
            </Column>
          </Row>
        </Column>
      </Column>
    </>
  );
};

export default MentorsCommunityIndividuallPage;
