import { A } from '@solidjs/router';
import { Button, ButtonType, Alert, AlertType, Chip } from 'proyecto-viviana-ui';

const Page = () =>{
  return <div class={"flex font-jost flex-1 flex-col p-4 md:p-9"}>
    <h1
      class={
        "text-4xl font-semibold text-primary-100 drop-shadow-title-primary"
      }
    >
      ¿Qué es Axum?
    </h1>
    <br />
    <span class={`font-sen text-lg text-primary-300`}>
      Este es un ejemplo de documentación.
    </span>
    <br />
    <div class="">
      {/*<ProfileHead />/*/}
    </div>
    <div class="w-[400px]">
      {/*<CardCarousel />*/}
    </div>
    <br />

    <div class="w-[400px]">
      {/*<CalendarCard />*/}
    </div>
    <div class="w-[400px]">
      {/*<Conversation />*/}
    </div>
    {/*<TimelineItem />*/}
    <br />
    {/*<Dialog />*/}
    <div class="flex flex-wrap justify-center gap-5">
      <Button
        type={ButtonType.Primary}
        onClick={() => {
          console.log("test1");
        }}
      >
        ME INTERESA
      </Button>
      <Button
        type={ButtonType.Secondary}
        onClick={() => {
          console.log("test1");
        }}
      >
        <span class="w-auto">SALÍ DE ACÁ</span>
      </Button>
      <Button
        type={ButtonType.Danger}
        onClick={() => {
          console.log("test1");
        }}
      >
        <span class="w-auto">ELIMINAR</span>
      </Button>
      <Button
        type={ButtonType.Success}
        onClick={() => {
          console.log("test1");
        }}
      >
        <span class="w-auto">GUARDAR</span>
      </Button>
      <Button
        type={ButtonType.Link}
        onClick={() => {
          console.log("test1");
        }}
      >
        <A href="/test" class="w-auto">
          BOTÓN LINK
        </A>
      </Button>
    </div>
    <br />
    {/*<Switch />*/}
    <div class="flex flex-wrap justify-center gap-5">
      {/*<Icon icon={MdMenu} type={IconType.FULL} size="30px" />
          <Icon icon={MdMenu} type={IconType.OUTLINE} size="30px" />
          <Icon icon={MdMenu} type={IconType.BORDERLESS} size="30px" />*/}
    </div>
    <br />
    <div class="">
      <Alert type={AlertType.Primary} onClick={() => console.log("test")}>
        Esto es un ejemplo de alerta.
      </Alert>
      <br />
      <Alert type={AlertType.Secondary} onClick={() => console.log("test")}>
        Esto es un ejemplo de alerta.
      </Alert>
      <br />
      <Alert type={AlertType.Danger} onClick={() => console.log("test")}>
        Esto es un ejemplo de alerta.
      </Alert>
      <br />
      <Alert type={AlertType.Success} onClick={() => console.log("test")}>
        Esto es un ejemplo de alerta.
      </Alert>
    </div>
    <br />
    <div class="">
      {/*<Badge />*/}
    </div>

  </div>
}
export default Page;