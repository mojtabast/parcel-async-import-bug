export async function asyncGreeting() {

  // This is not working
  const module_name = "hello";
  const hello = await import(`${module_name}-lib`);

  // This will work
  // const hello = await import(`hello-lib`);

  console.log(hello.say_hello());
}
