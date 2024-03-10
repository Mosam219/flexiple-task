import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
interface Props {
  title: string;
  children: JSX.Element | JSX.Element[];
}
const CardWrapper = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: "tween",
        duration: 0.2,
      }}
    >
      <Card className="my-3">
        {props.title ? (
          <CardHeader>
            <CardTitle className="flex justify-center items-center">
              {props.title}
            </CardTitle>
          </CardHeader>
        ) : null}
        <CardContent>{props.children}</CardContent>
      </Card>
    </motion.div>
  );
};
export default CardWrapper;
