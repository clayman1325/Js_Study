class DOMHelper {

  static clearEventListeners(element) {
    const clonnedElement = element.cloneNode(true)
    element.replaceWith(clonnedElement)
    return clonnedElement;
  }
  static moveElement(elementId, newDestinationSelector) {
    const element = document.getElementById(elementId);
    const destinationElement = document.querySelector(newDestinationSelector)
    destinationElement.append(element);
  }
}
class Component {
  constructor(hostElementId, insertBefore) {
    if(hostElementId) {
      this.hostElement = document.getElementById(hostElementId)
    } else {
      this.hostElement = document.body;
    }
    this.insertBefore = insertBefore;
  } 
  detach() {
    if(this.element) {
      this.element.remove();
    }
  }
  attach() {
    console.log(this.insertBefore)
    this.hostElement.insertAdjacentElement(this.insertBefore ? 'afterbegin' : 'beforeend', this.element)
  }
}

class Tooltip extends Component{
  constructor(closeNotifierFunction) {
    super('active-projects',false)
    this.closeNotifier = closeNotifierFunction;
    this.create();
  }
  closeTooltip = () => {
    console.log(".....")
    this.detach()
    this.closeNotifier()
  } 

  create() {
    const tooltipElement = document.createElement('div');
    tooltipElement.className = 'card';
    tooltipElement.textContent = "this is a tool tip";
    tooltipElement.addEventListener("click", this.closeTooltip)
    console.log(tooltipElement)
    this.element = tooltipElement
  }

}

class ProjectItem {
  hasActiveTooltip = false;
  constructor(id, updateProjectListsFunction, type) {
    this.id = id;
    this.type = type;
    this.updateProjectListsHandler = updateProjectListsFunction;
    this.connectSwitchButton(type);
    this.connectMoreInfoButton();
  }
  
  showMoreInfoHandler () {
    if(this.hasActiveTooltip){
      return
    }
    const tooltip = new Tooltip(() => {
      console.log(this)
      this.hasActiveTooltip = false;
    });
    tooltip.attach();
    this.hasActiveTooltip = true;
  }
  connectMoreInfoButton(){
    const projectItemElement = document.getElementById(this.id);
    const moreInfoBtn = projectItemElement.querySelector('button:first-of-type')
    moreInfoBtn.addEventListener('click', this.showMoreInfoHandler)
  }
  connectSwitchButton(type) {
    const projectItemElement = document.getElementById(this.id);
    let switchBtn = projectItemElement.querySelector('button:last-of-type');
    switchBtn = DOMHelper.clearEventListeners(switchBtn)
    switchBtn.textContent = type === 'active' ? 'Finish' : 'Activate';
    console.log(type, switchBtn.textContent)
    switchBtn.addEventListener(
      'click', 
      this.updateProjectListsHandler.bind(null, this.id)
    )
  }
  update(updateProjectListsFunction, type) {
    this.type = type;
    this.updateProjectListsHandler = updateProjectListsFunction;
    this.connectSwitchButton()
  }
}
class ProjectList {
  projects = [];

  constructor(type) {
    this.type = type;
    
    const prjItems = document.querySelectorAll(`#${type}-projects li`)
    for (const prjItem of prjItems){
      this.projects.push(new ProjectItem(prjItem.id, this.switchProject.bind(this), type));
    }
  }

  setSwitchHandlerFunction(switchHandlerFunction) {
    this.switchHandler = switchHandlerFunction;
  }
  addProject(project) {
    console.log(this)
    this.projects.push(project);
    DOMHelper.moveElement(project.id, `#${this.type}-projects ul`)
    project.update(this.switchProject.bind(this), this.type);
  }
  switchProject(projectId) {
    // const projectIndex = this.projects.findIndex( p => p.id === projectId)
    // this.projects.splice(projectIndex, 1)
    this.switchHandler(this.projects.find(p => p.id == projectId))
    this.projects = this.projects.filter( p => p.id !== projectId)
  }

}

class App{
  static init() {
    const activeProjectList = new ProjectList('active');
    const finishedProjectList = new ProjectList('finished')
    activeProjectList.setSwitchHandlerFunction(
      finishedProjectList.addProject.bind(finishedProjectList)
    );
    finishedProjectList.setSwitchHandlerFunction(
      activeProjectList.addProject.bind(activeProjectList)
    );
  }
}

App.init()