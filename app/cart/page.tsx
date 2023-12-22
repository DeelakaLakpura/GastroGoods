import getCurrentUser from "@/actions/getCurrentUser";
import Container from "../components/Container";
import CartClient from "./CartClient";

const Cart = async () => {
  const currentUser = await getCurrentUser();

  return (
    <div className="pt-8">
      <Container>
        <CartClient currentUser={currentUser} />
      </Container>
    </div>
  );
};

export default Cart;
