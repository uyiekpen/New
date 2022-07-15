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

const CommunityPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <Column className="bg-gray_50 font-roboto items-center justify-start mx-[auto] outline outline-[4px] outline-red_A700 lg:py-[20px] xl:py-[23px] py-[26px] 3xl:py-[31px] w-[100%]">
        <header className="w-[89%]">
          <Row className="bg-white_A700 items-center justify-start xl:pr-[3px] lg:pr-[3px] pr-[4px] w-[100%]">
            <Image
              src={"images/img_logo_26.png"}
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
                      ? "images/close21.svg"
                      : "images/img_magnifyingglass_22.png"
                  }
                  className="cursor-pointer w-[24px] h-[24px] lg:w-[18px] lg:h-[19px] xl:w-[21px] xl:h-[22px] 2xl:h-[25px] 3xl:w-[28px] 3xl:h-[29px] my-[auto]"
                  alt="MagnifyingGlass"
                />
              }
            ></Input>
            <Button className="bg-gray_200 flex lg:h-[30px] xl:h-[34px] h-[38px] 2xl:h-[39px] 3xl:h-[46px] items-center justify-center lg:ml-[35px] xl:ml-[40px] ml-[45px] 3xl:ml-[54px] my-[10px] 3xl:my-[12px] lg:my-[7px] xl:my-[8px] lg:p-[3px] xl:p-[4px] p-[5px] 3xl:p-[6px] rounded-radius1938 lg:w-[29px] xl:w-[33px] w-[38px] 3xl:w-[45px]">
              <Image
                src={"images/img_group5_24.png"}
                className="w-[24.77px] h-[24.77px] flex items-center justify-center lg:w-[19px] lg:h-[20px] xl:w-[22px] xl:h-[23px] 2xl:w-[24px] 2xl:h-[25px] 3xl:w-[29px] 3xl:h-[30px]"
                alt="Group5"
              />
            </Button>
            <Stack className="lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] lg:ml-[24px] xl:ml-[28px] ml-[32px] 3xl:ml-[38px] 3xl:my-[10px] lg:my-[7px] xl:my-[8px] my-[9px] w-[3%]">
              <Button className="absolute bg-gray_200 flex lg:h-[30px] xl:h-[34px] h-[38px] 2xl:h-[39px] 3xl:h-[46px] items-center justify-center lg:p-[3px] xl:p-[4px] p-[5px] 3xl:p-[6px] rounded-radius1938 w-[100%]">
                <Image
                  src={"images/img_group436.png"}
                  className="w-[24.77px] h-[24.77px] flex items-center justify-center lg:w-[19px] lg:h-[20px] xl:w-[22px] xl:h-[23px] 2xl:w-[24px] 2xl:h-[25px] 3xl:w-[29px] 3xl:h-[30px]"
                  alt="Group436"
                />
              </Button>
              <Text className="absolute bg-red_A701 font-normal lg:h-[15px] xl:h-[17px] h-[19px] 2xl:h-[20px] 3xl:h-[23px] not-italic lg:pl-[4px] xl:pl-[5px] pl-[6px] 3xl:pl-[7px] lg:pr-[3px] xl:pr-[4px] pr-[5px] 3xl:pr-[6px] xl:py-[1px] lg:py-[1px] py-[2px] rounded-radius969 xl:text-[10px] text-[11.63px] 2xl:text-[11px] 3xl:text-[13px] lg:text-[9px] text-white_A700 w-[auto]">
                3
              </Text>
            </Stack>
            <Image
              src={"images/img_ellipse17_12.png"}
              className="lg:h-[30px] xl:h-[34px] h-[38px] 2xl:h-[39px] 3xl:h-[46px] lg:ml-[24px] xl:ml-[28px] ml-[32px] 3xl:ml-[38px] my-[10px] 3xl:my-[12px] lg:my-[7px] xl:my-[8px] object-contain rounded-radius50 w-[auto]"
              alt="Ellipse17"
            />
            <Image
              src={"images/img_vector_73.png"}
              className="lg:h-[6px] h-[7px] 2xl:h-[8px] 3xl:h-[9px] lg:mb-[19px] xl:mb-[22px] mb-[25px] 3xl:mb-[30px] ml-[11px] 3xl:ml-[13px] lg:ml-[8px] xl:ml-[9px] lg:mt-[20px] xl:mt-[23px] mt-[26px] 3xl:mt-[31px] object-contain w-[1%]"
              alt="Vector"
            />
          </Row>
        </header>
        <Column className="items-start justify-start lg:mb-[6px] xl:mb-[7px] mb-[8px] 3xl:mb-[9px] mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] w-[100%]">
          <Line className="bg-blue_800 h-[1440px] rotate-[-90deg] w-[100%]" />
          <Row className="items-center justify-start xl:ml-[2px] lg:ml-[2px] ml-[3px] w-[94%]">
            <Stack className="3xl:h-[1072px] lg:h-[694px] xl:h-[794px] h-[892px] 2xl:h-[893px] w-[19%]">
              <Line className="absolute bg-blue_800 lg:h-[39px] xl:h-[44px] h-[49px] 2xl:h-[50px] 3xl:h-[59px] inset-y-[0] my-[auto] rounded-radius3 w-[6px]" />
              <Column className="absolute bg-white_A700 justify-center lg:pl-[59px] xl:pl-[68px] pl-[77px] 3xl:pl-[92px] lg:py-[59px] xl:py-[68px] py-[77px] 3xl:py-[92px] right-[2%] shadow-bs2 w-[98%]">
                <Column className="items-start justify-start lg:ml-[18px] xl:ml-[21px] ml-[24px] 3xl:ml-[28px] lg:mr-[28px] xl:mr-[32px] mr-[37px] 3xl:mr-[44px] lg:mt-[4px] xl:mt-[5px] mt-[6px] 3xl:mt-[7px] w-[64%]">
                  <Row className="items-center justify-start xl:ml-[2px] lg:ml-[2px] ml-[3px] w-[77%]">
                    <Image
                      src={"images/img_vector_74.png"}
                      className="lg:h-[14px] xl:h-[16px] h-[17px] 2xl:h-[18px] 3xl:h-[21px] mb-[1px] mt-[0] object-contain lg:w-[13px] xl:w-[15px] w-[17px] 3xl:w-[20px]"
                      alt="Vector"
                    />
                    <Text className="font-normal lg:ml-[21px] xl:ml-[24px] ml-[27px] 3xl:ml-[32px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_900_cc w-[auto]">
                      Home
                    </Text>
                  </Row>
                  <Row className="items-center justify-start lg:mt-[31px] xl:mt-[36px] mt-[41px] 3xl:mt-[49px] w-[88%]">
                    <Image
                      src={"images/img_chalkboardteach_9.png"}
                      className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                      alt="ChalkboardTeach"
                    />
                    <Text className="font-normal xl:mb-[1px] lg:mb-[1px] mb-[2px] lg:ml-[17px] xl:ml-[20px] ml-[23px] 3xl:ml-[27px] xl:mt-[2px] lg:mt-[2px] mt-[3px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_900_b2 w-[auto]">
                      Mentor
                    </Text>
                  </Row>
                  <Row className="items-center justify-start ml-[0] lg:mt-[32px] xl:mt-[37px] mt-[42px] 3xl:mt-[50px] w-[70%]">
                    <Image
                      src={"images/img_bookopen_10.png"}
                      className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                      alt="BookOpen"
                    />
                    <Text className="font-normal xl:mb-[1px] lg:mb-[1px] mb-[2px] lg:ml-[17px] xl:ml-[20px] ml-[23px] 3xl:ml-[27px] xl:mt-[2px] lg:mt-[2px] mt-[3px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_900_b2 w-[auto]">
                      Test
                    </Text>
                  </Row>
                  <Row className="items-center justify-start ml-[0] lg:mt-[31px] xl:mt-[35px] mt-[40px] 3xl:mt-[48px] w-[95%]">
                    <Image
                      src={"images/img_notebook_10.png"}
                      className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                      alt="Notebook"
                    />
                    <Text className="font-normal xl:mb-[1px] lg:mb-[1px] mb-[2px] lg:ml-[17px] xl:ml-[20px] ml-[23px] 3xl:ml-[27px] xl:mt-[2px] lg:mt-[2px] mt-[3px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_900_b2 w-[auto]">
                      Resume
                    </Text>
                  </Row>
                  <Row className="items-center justify-start lg:mt-[31px] xl:mt-[35px] mt-[40px] 3xl:mt-[48px] w-[100%]">
                    <Image
                      src={"images/img_suitcasesimple_18.png"}
                      className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                      alt="SuitcaseSimple"
                    />
                    <Text className="font-normal xl:mb-[1px] lg:mb-[1px] mb-[2px] lg:ml-[17px] xl:ml-[20px] ml-[23px] 3xl:ml-[27px] xl:mt-[2px] lg:mt-[2px] mt-[3px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_900_b2 w-[auto]">
                      Interview
                    </Text>
                  </Row>
                </Column>
                <Column className="items-center justify-start lg:mb-[162px] xl:mb-[185px] mb-[209px] 3xl:mb-[250px] lg:mt-[10px] xl:mt-[11px] mt-[13px] 3xl:mt-[15px] w-[100%]">
                  <Input
                    className="bg-transparent border-0 font-bold p-[0] lg:pl-[17px] xl:pl-[20px] pl-[23px] 3xl:pl-[27px] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] placeholder:text-white_A700 text-white_A700 w-[100%]"
                    WrapClassName="3xl:pb-[19px] 3xl:pl-[28px] 3xl:pr-[21px] 3xl:pt-[26px] bg-blue_800 flex lg:pb-[12px] lg:pl-[18px] lg:pr-[14px] lg:pt-[17px] pb-[16px] pl-[24px] pr-[18px] pt-[22px] rounded-bl-[0] rounded-br-[0] rounded-tl-[20px] rounded-tr-[0] w-[100%] xl:pb-[14px] xl:pl-[21px] xl:pr-[16px] xl:pt-[19px]"
                    name="Group433"
                    placeholder="Community"
                    prefix={
                      <Image
                        src={"images/img_usersthree_13.png"}
                        className="w-[24.77px] h-[24.77px] lg:w-[19px] lg:h-[20px] xl:w-[22px] xl:h-[23px] 2xl:w-[24px] 2xl:h-[25px] 3xl:w-[29px] 3xl:h-[30px] my-[auto]"
                        alt="UsersThree"
                      />
                    }
                  ></Input>
                  <Stack className="lg:h-[133px] xl:h-[153px] h-[171px] 2xl:h-[172px] 3xl:h-[206px] w-[100%]">
                    <Row className="absolute items-start justify-center left-[14%] top-[16%] w-[61%]">
                      <Image
                        src={"images/img_gear_20.png"}
                        className="lg:h-[19px] xl:h-[22px] h-[24px] 2xl:h-[25px] 3xl:h-[29px] lg:mt-[11px] xl:mt-[13px] mt-[15px] 3xl:mt-[18px] object-contain lg:w-[18px] xl:w-[21px] w-[24px] 3xl:w-[28px]"
                        alt="Gear"
                      />
                      <Text className="font-normal lg:mb-[15px] xl:mb-[17px] mb-[20px] 3xl:mb-[24px] lg:ml-[17px] xl:ml-[20px] ml-[23px] 3xl:ml-[27px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_900_b2 w-[auto]">
                        Settings
                      </Text>
                    </Row>
                    <Column className="absolute bg-white_A700 justify-end lg:pt-[14px] xl:pt-[16px] pt-[18px] 3xl:pt-[21px] rounded-bl-[20px] rounded-br-[0] rounded-tl-[0] rounded-tr-[0] shadow-bs w-[100%]">
                      <Text className="font-normal lg:ml-[37px] xl:ml-[42px] ml-[48px] 3xl:ml-[57px] lg:mr-[49px] xl:mr-[56px] mr-[63px] 3xl:mr-[75px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_900_cc w-[auto]">
                        All talent
                      </Text>
                      <Column className="items-start justify-start lg:mt-[5px] xl:mt-[6px] mt-[7px] 3xl:mt-[8px] w-[100%]">
                        <Line className="bg-blue_800 h-[0.3px] w-[100%]" />
                        <Text className="font-normal lg:ml-[36px] xl:ml-[41px] ml-[47px] 3xl:ml-[56px] lg:mt-[15px] xl:mt-[17px] mt-[20px] 3xl:mt-[24px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_900_cc w-[auto]">
                          Onboarding
                        </Text>
                        <Text className="font-normal lg:ml-[36px] xl:ml-[41px] ml-[47px] 3xl:ml-[56px] lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] not-italic lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_900_cc w-[auto]">
                          Mentor
                        </Text>
                        <Text className="bg-gray_200 font-normal leading-[normal] lg:mt-[6px] xl:mt-[7px] mt-[8px] 3xl:mt-[9px] not-italic lg:pb-[13px] xl:pb-[15px] pb-[17px] 3xl:pb-[20px] lg:pl-[27px] xl:pl-[31px] pl-[35px] 3xl:pl-[42px] lg:pt-[6px] xl:pt-[7px] pt-[8px] 3xl:pt-[9px] rounded-bl-[20px] rounded-br-[0] rounded-tl-[0] rounded-tr-[0] lg:text-[12px] xl:text-[14px] text-[16px] 3xl:text-[19px] text-gray_900_cc text-left text-shadow-ts1 w-[100%]">
                          Create Group
                        </Text>
                      </Column>
                    </Column>
                  </Stack>
                </Column>
              </Column>
            </Stack>
            <Column className="items-start lg:mb-[24px] xl:mb-[27px] mb-[31px] 3xl:mb-[37px] lg:ml-[33px] xl:ml-[38px] ml-[43px] 3xl:ml-[51px] lg:mt-[51px] xl:mt-[58px] mt-[66px] 3xl:mt-[79px] w-[78%]">
              <Button className="bg-blue_800 font-medium outline outline-[1px] outline-blue_800 lg:py-[23px] xl:py-[26px] py-[30px] 3xl:py-[36px] rounded-bl-[0] rounded-br-[0] rounded-tl-[10px] rounded-tr-[10px] lg:text-[24px] xl:text-[28px] text-[32px] 3xl:text-[38px] text-center text-white_A700 w-[100%]">
                All Talents
              </Button>
              <Row className="items-center justify-start ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:mt-[63px] xl:mt-[72px] mt-[81px] 3xl:mt-[97px] w-[46%]">
                <Image
                  src={"images/img_ellipse37_2.png"}
                  className="lg:h-[52px] xl:h-[59px] h-[66px] 2xl:h-[67px] 3xl:h-[80px] object-contain rounded-radius50 w-[auto]"
                  alt="Ellipse37"
                />
                <Input
                  className="bg-transparent border-0 font-normal not-italic lg:pb-[14px] xl:pb-[16px] pb-[18px] 3xl:pb-[21px] xl:pt-[10px] pt-[12px] 3xl:pt-[14px] lg:pt-[9px] lg:px-[27px] xl:px-[31px] px-[35px] 3xl:px-[42px] lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] placeholder:text-white_A700 text-white_A700 w-[100%]"
                  WrapClassName="3xl:ml-[40px] bg-blue_800 lg:ml-[26px] lg:my-[3px] ml-[34px] my-[4px] rounded-radius5 w-[79%] xl:ml-[30px] xl:my-[3px]"
                  name="Group429"
                  placeholder="Hi, guys, how was your day"
                ></Input>
              </Row>
              <Column className="bg-gray_200 items-start justify-start lg:ml-[430px] xl:ml-[491px] ml-[553px] 3xl:ml-[663px] lg:mt-[56px] xl:mt-[64px] mt-[72px] 3xl:mt-[86px] lg:p-[12px] xl:p-[14px] p-[16px] 3xl:p-[19px] rounded-radius5 w-[46%]">
                <Text className="font-normal leading-[normal] lg:mb-[14px] xl:mb-[16px] mb-[18px] 3xl:mb-[21px] xl:mt-[1px] lg:mt-[1px] mt-[2px] not-italic lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-gray_900 text-left w-[94%]">
                  Hello everyone, i’m new here and i’m an
                  <br />
                  aspiring software developer and i would <br />
                  love to work with everyone
                </Text>
              </Column>
              <Stack className="h-[102px] 2xl:h-[103px] 3xl:h-[123px] lg:h-[80px] xl:h-[91px] lg:mt-[186px] xl:mt-[213px] mt-[240px] 3xl:mt-[288px] w-[100%]">
                <Text className="absolute font-normal h-[max-content] inset-y-[0] left-[15%] my-[auto] not-italic lg:text-[18px] xl:text-[21px] text-[24px] 3xl:text-[28px] text-gray_900 w-[auto]">
                  I’m good sir and you?
                </Text>
                <Row className="absolute border-blue_800 border-bw3 border-solid items-center justify-end lg:p-[17px] xl:p-[20px] p-[23px] 3xl:p-[27px] rounded-radius40 w-[100%]">
                  <Image
                    src={"images/img_plus_21.png"}
                    className="lg:h-[26px] xl:h-[30px] h-[33px] 2xl:h-[34px] 3xl:h-[40px] my-[11px] 3xl:my-[13px] lg:my-[8px] xl:my-[9px] object-contain lg:w-[25px] xl:w-[29px] w-[33px] 3xl:w-[39px]"
                    alt="Plus"
                  />
                  <Image
                    src={"images/img_camera_2.png"}
                    className="lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] lg:ml-[15px] xl:ml-[17px] ml-[20px] 3xl:ml-[24px] lg:my-[6px] xl:my-[7px] my-[8px] 3xl:my-[9px] object-contain lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]"
                    alt="Camera"
                  />
                  <Line className="bg-gray_900_7c lg:h-[30px] xl:h-[34px] h-[38px] 2xl:h-[39px] 3xl:h-[46px] lg:ml-[219px] xl:ml-[250px] ml-[282px] 3xl:ml-[338px] 3xl:my-[10px] lg:my-[7px] xl:my-[8px] my-[9px] w-[2px]" />
                  <Image
                    src={"images/img_paperplaneright_2.png"}
                    className="lg:h-[32px] xl:h-[36px] h-[40px] 2xl:h-[41px] 3xl:h-[49px] lg:ml-[464px] xl:ml-[531px] ml-[597px] 3xl:ml-[716px] lg:my-[6px] xl:my-[7px] my-[8px] 3xl:my-[9px] object-contain lg:w-[31px] xl:w-[35px] w-[40px] 3xl:w-[48px]"
                    alt="PaperPlaneRight"
                  />
                </Row>
              </Stack>
            </Column>
          </Row>
        </Column>
      </Column>
    </>
  );
};

export default CommunityPage;
