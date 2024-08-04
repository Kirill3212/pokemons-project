import { VStack, Flex, Text, Divider } from "@chakra-ui/react";
import { IoLogoJavascript } from "react-icons/io5";
import { BiLogoTypescript } from "react-icons/bi";
import { IoLogoSass } from "react-icons/io5";
import { MdCss } from "react-icons/md";
import { TbBrandRedux } from "react-icons/tb";
import { SiReactrouter } from "react-icons/si";
import { SiReacthookform } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { TbBrandVite } from "react-icons/tb";
import { FaJira } from "react-icons/fa";
import { GrGraphQl } from "react-icons/gr";
import { SiJest } from "react-icons/si";
import { SiWebpack } from "react-icons/si";
import { TiHtml5 } from "react-icons/ti";
import { FaReact } from "react-icons/fa";
import { FaFigma } from "react-icons/fa";
import { SiChakraui } from "react-icons/si";
import { FaConfluence } from "react-icons/fa";

const Developer = () => {
  return (
    <VStack gap={"10px"} mt={"40px"}>
      <Divider width={"34%"} borderColor={"pink.400"} />
      <Flex gap={"10px"}>
        <Text fontSize="m" color={"grey"}>
          Skills:
        </Text>
        <Flex alignItems={"center"} gap={"1"}>
          <IoLogoJavascript size={"20px"} />
          <BiLogoTypescript size={"23px"} />
          <TiHtml5 size={"23px"} />
          <MdCss size={"25px"} />
          <IoLogoSass size={"21px"} />
          <FaReact size={"21px"} />
          <TbBrandRedux size={"21px"} />
          <SiReactrouter size={"21px"} />
          <SiReacthookform size={"19px"} />
          <GrGraphQl size={"20px"} />
          <FaGitAlt size={"21px"} />
          <SiWebpack size={"21px"} />
          <TbBrandVite size={"22px"} />
          <SiJest size={"22px"} />
          <FaJira size={"21px"} />
          <FaConfluence size={"18px"} />
          <FaFigma size={"18px"} />
          <SiChakraui size={"18px"} />
        </Flex>
      </Flex>

      <Text fontSize="xl" color={"pink.400"}>
        About me
      </Text>
      <Text>I am a frontend developer with a 2+ yeats of experience</Text>

      <Text fontSize="xl" color={"pink.400"}>
        Knowledge and Skills
      </Text>
      <VStack alignItems={"left"}>
        <Text>
          • Experienced in developing web applications using JavaScript,
          TypeScript, and front-end frameworks and libraries.
        </Text>
        <Text>
          • Skilled in creating maintainable and readable code, communicating
          with other team members to achieve optimal results.
        </Text>
        <Text>• Proficient in optimizing complex code sections.</Text>
        <Text>
          • Committed to continuous professional growth and rapid skill
          acquisition.
        </Text>
        <Text>
          • Motivated, active, punctual, responsible, willing to collaborate
          effectively within a team, detail-oriented, and committed to
          continuous professional development.
        </Text>
      </VStack>

      <Text fontSize="xl" color={"pink.400"}>
        Languages
      </Text>

      <VStack>
        <Text>English C1</Text>
        <Text>Spanish A2</Text>
      </VStack>

      {/* <ol style={{ marginTop: "20px", marginLeft: "15px" }}>
        <li>Add accordion chakra with questions</li>
        <li>My picture and experience stats</li>
        <li>Cool chakra stepper with changed indicator content</li>
        <li>
          Evolution display of a pokemon, not on this page, maybe create another
          one - https://pokeapi.co/docs/v2#evolution-chains
        </li>
      </ol> */}
    </VStack>
  );
};

export default Developer;
